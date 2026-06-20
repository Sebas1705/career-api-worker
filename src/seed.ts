/**
 * Seed script: uploads all initial data to the production KV namespace via Wrangler.
 * Run: npx wrangler kv key put --namespace-id=<KV_ID> --remote <key> <value>
 *
 * This script generates the wrangler CLI commands to seed each key.
 * Execute the output commands one by one, or pipe to bash.
 */
import { SEED } from './seed-data'

const entries = Object.entries(SEED)
for (const [key, value] of entries) {
  console.log(`npx wrangler kv key put --binding=CAREER_KV --remote "${key}" '${JSON.stringify(value)}'`)
}
