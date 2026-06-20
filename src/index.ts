import type { Env } from './types'
import { cors, preflight } from './cors'
import { dispatch } from './router'

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') return preflight(env)
    const response = await dispatch(request, env)
    return cors(response, env)
  },
} satisfies ExportedHandler<Env>
