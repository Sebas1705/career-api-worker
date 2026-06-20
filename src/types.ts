export interface Env {
  CAREER_KV: KVNamespace
  API_SECRET: string
  ALLOWED_ORIGIN: string
}

export type EntityKey =
  | 'personal'
  | 'jobs'
  | 'projects'
  | 'skills'
  | 'education'
  | 'certifications'
  | 'soft-skills'

export const ENTITY_KEYS: EntityKey[] = [
  'personal',
  'jobs',
  'projects',
  'skills',
  'education',
  'certifications',
  'soft-skills',
]

export const SINGULAR_ENTITIES: EntityKey[] = ['personal']
export const ARRAY_ENTITIES: EntityKey[] = ENTITY_KEYS.filter(
  (k) => !SINGULAR_ENTITIES.includes(k),
)
