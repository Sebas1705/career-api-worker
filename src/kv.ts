import type { Env, EntityKey } from './types'

export async function kvGet<T>(env: Env, key: EntityKey): Promise<T | null> {
  const raw = await env.CAREER_KV.get(key)
  if (!raw) return null
  return JSON.parse(raw) as T
}

export async function kvSet(env: Env, key: EntityKey, value: unknown): Promise<void> {
  await env.CAREER_KV.put(key, JSON.stringify(value))
}

/** Find an item by id in an array entity */
export async function kvGetById<T extends { id: string }>(
  env: Env,
  key: EntityKey,
  id: string,
): Promise<T | null> {
  const list = await kvGet<T[]>(env, key)
  return list?.find((item) => item.id === id) ?? null
}

/** Add item to an array entity, returns new list */
export async function kvCreate<T extends { id: string }>(
  env: Env,
  key: EntityKey,
  item: T,
): Promise<T[]> {
  const list = (await kvGet<T[]>(env, key)) ?? []
  const exists = list.some((i) => i.id === item.id)
  if (exists) throw new Error(`Item with id '${item.id}' already exists`)
  const updated = [...list, item]
  await kvSet(env, key, updated)
  return updated
}

/** Replace item by id in an array entity, returns updated item */
export async function kvUpdate<T extends { id: string }>(
  env: Env,
  key: EntityKey,
  id: string,
  patch: Partial<T>,
): Promise<T> {
  const list = (await kvGet<T[]>(env, key)) ?? []
  const idx = list.findIndex((i) => i.id === id)
  if (idx === -1) throw new Error(`Item with id '${id}' not found`)
  const updated = { ...list[idx], ...patch, id } as T
  list[idx] = updated
  await kvSet(env, key, list)
  return updated
}

/** Delete item by id from array entity, returns deleted item */
export async function kvDelete<T extends { id: string }>(
  env: Env,
  key: EntityKey,
  id: string,
): Promise<T> {
  const list = (await kvGet<T[]>(env, key)) ?? []
  const idx = list.findIndex((i) => i.id === id)
  if (idx === -1) throw new Error(`Item with id '${id}' not found`)
  const [deleted] = list.splice(idx, 1)
  await kvSet(env, key, list)
  return deleted as T
}
