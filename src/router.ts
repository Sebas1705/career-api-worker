import type { Env, EntityKey } from './types'
import { ARRAY_ENTITIES, SINGULAR_ENTITIES } from './types'
import { isAuthenticated, unauthorized } from './auth'
import { kvGet, kvSet, kvGetById, kvCreate, kvUpdate, kvDelete } from './kv'

type Handler = (req: Request, env: Env, params: Record<string, string>) => Promise<Response>

interface Route {
  method: string
  pattern: RegExp
  paramNames: string[]
  handler: Handler
  requiresAuth: boolean
}

const routes: Route[] = []

function addRoute(
  method: string,
  path: string,
  handler: Handler,
  requiresAuth = false,
) {
  const paramNames: string[] = []
  const pattern = new RegExp(
    '^' +
      path.replace(/:([^/]+)/g, (_, name) => {
        paramNames.push(name)
        return '([^/]+)'
      }) +
      '$',
  )
  routes.push({ method, pattern, paramNames, handler, requiresAuth })
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

function notFound(msg = 'Not found'): Response {
  return json({ error: msg }, 404)
}

function badRequest(msg: string): Response {
  return json({ error: msg }, 400)
}

function serverError(e: unknown): Response {
  const msg = e instanceof Error ? e.message : 'Internal error'
  return json({ error: msg }, 500)
}

// ── Root ─────────────────────────────────────────────────────────────────────

addRoute('GET', '/', async (_req, _env) => {
  return json({
    name: 'Career API',
    version: '2.0.0',
    author: 'Sebastián Entrerrios García',
    endpoints: [
      '/personal',
      '/jobs',
      '/projects',
      '/skills',
      '/education',
      '/certifications',
      '/soft-skills',
    ],
    write_methods: ['POST', 'PUT', 'PATCH', 'DELETE'],
    auth: 'Bearer token required for write operations',
  })
})

// ── Singular entity: /personal ────────────────────────────────────────────────

addRoute('GET', '/personal', async (_req, env) => {
  const data = await kvGet(env, 'personal')
  if (!data) return notFound('Personal data not seeded yet')
  return json(data)
})

addRoute('PUT', '/personal', async (req, env) => {
  const body = await req.json().catch(() => null)
  if (!body || typeof body !== 'object') return badRequest('Invalid JSON body')
  await kvSet(env, 'personal', body)
  return json(body)
}, true)

addRoute('PATCH', '/personal', async (req, env) => {
  const patch = await req.json().catch(() => null)
  if (!patch || typeof patch !== 'object') return badRequest('Invalid JSON body')
  const current = (await kvGet(env, 'personal')) ?? {}
  const updated = { ...(current as object), ...(patch as object) }
  await kvSet(env, 'personal', updated)
  return json(updated)
}, true)

// ── Array entities: generic CRUD ──────────────────────────────────────────────

for (const entity of ARRAY_ENTITIES) {
  const e = entity // capture

  // GET all
  addRoute('GET', `/${e}`, async (_req, env) => {
    const list = await kvGet(env, e)
    if (!list) return json([])
    return json(list)
  })

  // GET by id
  addRoute('GET', `/${e}/:id`, async (_req, env, params) => {
    const item = await kvGetById(env, e, params.id)
    if (!item) return notFound(`${e}/${params.id} not found`)
    return json(item)
  })

  // POST create
  addRoute('POST', `/${e}`, async (req, env) => {
    try {
      const body = await req.json() as Record<string, unknown>
      if (!body.id || typeof body.id !== 'string') return badRequest('Field "id" (string) is required')
      await kvCreate(env, e, body as { id: string })
      return json(body, 201)
    } catch (err) {
      return err instanceof Error && err.message.includes('already exists')
        ? json({ error: err.message }, 409)
        : serverError(err)
    }
  }, true)

  // PUT replace
  addRoute('PUT', `/${e}/:id`, async (req, env, params) => {
    try {
      const body = await req.json() as Record<string, unknown>
      const updated = await kvUpdate(env, e, params.id, { ...body, id: params.id })
      return json(updated)
    } catch (err) {
      return err instanceof Error && err.message.includes('not found')
        ? notFound(err.message)
        : serverError(err)
    }
  }, true)

  // PATCH partial update
  addRoute('PATCH', `/${e}/:id`, async (req, env, params) => {
    try {
      const patch = await req.json() as Record<string, unknown>
      const updated = await kvUpdate(env, e, params.id, patch)
      return json(updated)
    } catch (err) {
      return err instanceof Error && err.message.includes('not found')
        ? notFound(err.message)
        : serverError(err)
    }
  }, true)

  // DELETE
  addRoute('DELETE', `/${e}/:id`, async (_req, env, params) => {
    try {
      const deleted = await kvDelete(env, e, params.id)
      return json(deleted)
    } catch (err) {
      return err instanceof Error && err.message.includes('not found')
        ? notFound(err.message)
        : serverError(err)
    }
  }, true)
}

// ── Dispatcher ────────────────────────────────────────────────────────────────

export async function dispatch(req: Request, env: Env): Promise<Response> {
  const url = new URL(req.url)
  const pathname = url.pathname.replace(/\/$/, '') || '/'
  const method = req.method.toUpperCase()

  for (const route of routes) {
    if (route.method !== method) continue
    const match = route.pattern.exec(pathname)
    if (!match) continue

    const params: Record<string, string> = {}
    route.paramNames.forEach((name, i) => {
      params[name] = match[i + 1]
    })

    if (route.requiresAuth && !isAuthenticated(req, env)) {
      return unauthorized()
    }

    try {
      return await route.handler(req, env, params)
    } catch (e) {
      return serverError(e)
    }
  }

  return notFound(`Route ${method} ${pathname} not found`)
}
