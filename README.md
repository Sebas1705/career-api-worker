# career-api

REST API for managing personal career portfolio data. Built with **Cloudflare Workers** + **Cloudflare KV**, written in TypeScript.

**Live URL:** `https://career-api.sebas1705.workers.dev`

---

## Overview

This API exposes CRUD endpoints for all sections of a developer portfolio: personal info, jobs, projects, education, certifications, skills, and soft skills.

- **Read** operations are public (no auth required)
- **Write** operations (`POST`, `PUT`, `PATCH`, `DELETE`) require a Bearer token
- Data is persisted in **Cloudflare KV**

---

## Authentication

Write operations require an `Authorization` header:

```
Authorization: Bearer <API_SECRET>
```

Unauthenticated write requests return `401 Unauthorized`.

---

## Entities

| Entity | Path | Type |
|---|---|---|
| Personal info | `/personal` | Singular object |
| Jobs | `/jobs` | Array (items have `id`) |
| Projects | `/projects` | Array (items have `id`) |
| Skills | `/skills` | Array (items have `id`) |
| Education | `/education` | Array (items have `id`) |
| Certifications | `/certifications` | Array (items have `id`) |
| Soft Skills | `/soft-skills` | Array (items have `id`) |

**Singular entities** (`personal`) support `GET`, `PUT`, `PATCH`.  
**Array entities** support full CRUD: `GET` (list + by id), `POST`, `PUT/:id`, `PATCH/:id`, `DELETE/:id`.

---

## Endpoints

### Root

```
GET /
```

Returns API metadata and available endpoints.

---

### Personal (singular)

```
GET    /personal          → returns the personal object
PUT    /personal          → replaces the entire personal object  [auth]
PATCH  /personal          → merges fields into the personal object  [auth]
```

**Example PATCH:**
```bash
curl -X PATCH https://career-api.sebas1705.workers.dev/personal \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"location_en": "Barcelona, Spain"}'
```

---

### Array entities (jobs, projects, skills, education, certifications, soft-skills)

Replace `{entity}` with any array entity name.

```
GET    /{entity}          → returns all items as an array
GET    /{entity}/:id      → returns a single item by id
POST   /{entity}          → creates a new item  [auth]
PUT    /{entity}/:id      → replaces an item by id  [auth]
PATCH  /{entity}/:id      → partially updates an item by id  [auth]
DELETE /{entity}/:id      → deletes an item by id  [auth]
```

**POST requires** a body with a unique `"id"` string field. Returns `409 Conflict` if the id already exists.

**Examples:**

```bash
# List all projects
curl https://career-api.sebas1705.workers.dev/projects

# Get a single project
curl https://career-api.sebas1705.workers.dev/projects/youknow

# Create a new certification
curl -X POST https://career-api.sebas1705.workers.dev/certifications \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "new-cert",
    "name": "My New Certification",
    "issuer": "Udemy",
    "date": "Jun 2026",
    "url": "https://example.com/cert"
  }'

# Update a job's description
curl -X PATCH https://career-api.sebas1705.workers.dev/jobs/senior-solusoft \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"desc": {"en": "Updated description", "es": "Descripción actualizada"}}'

# Delete a project
curl -X DELETE https://career-api.sebas1705.workers.dev/projects/old-project \
  -H "Authorization: Bearer <token>"
```

---

## HTTP Status Codes

| Code | Meaning |
|---|---|
| `200` | Success |
| `201` | Created (POST) |
| `400` | Bad request (missing/invalid body or `id` field) |
| `401` | Unauthorized (missing or invalid Bearer token) |
| `404` | Entity or item not found |
| `409` | Conflict (duplicate `id` on POST) |
| `500` | Internal server error |

---

## Data Schemas

### Personal

```json
{
  "name": "string",
  "greeting_en": "string",
  "greeting_es": "string",
  "role_en": "string",
  "role_es": "string",
  "tagline_en": "string",
  "tagline_es": "string",
  "bio_en": "string",
  "bio_es": "string",
  "email": "string",
  "location_en": "string",
  "location_es": "string",
  "cv_url": "string",
  "github": "string",
  "linkedin": "string",
  "codewars": "string"
}
```

### Job

```json
{
  "id": "string (unique, kebab-case)",
  "role": { "en": "string", "es": "string" },
  "company": "string",
  "companyUrl": "string",
  "period": { "en": "string", "es": "string" },
  "type": { "en": "Hybrid | Remote | On-site", "es": "string" },
  "desc": { "en": "string", "es": "string" },
  "projects": ["string"],
  "achievements": ["string"]
}
```

### Project

```json
{
  "id": "string (unique, kebab-case)",
  "name": "string",
  "context": "work | academic | personal",
  "desc": { "en": "string", "es": "string" },
  "tags": ["string"],
  "github": "string | null",
  "demo": "string | null"
}
```

### Education

```json
{
  "id": "string (unique, kebab-case)",
  "degree": { "en": "string", "es": "string" },
  "school": "string",
  "period": { "en": "string", "es": "string" },
  "detail": { "en": "string", "es": "string" },
  "icon": "string"
}
```

### Certification

```json
{
  "id": "string (unique, kebab-case)",
  "name": "string",
  "issuer": "string",
  "date": "string (e.g. 'Jun 2026')",
  "url": "string"
}
```

### Skill

```json
{
  "id": "string (unique, kebab-case)",
  "name": "string",
  "category": "string",
  "level": "number (1-4)"
}
```

### Soft Skill

```json
{
  "id": "string (unique, kebab-case)",
  "name_en": "string",
  "name_es": "string"
}
```

---

## Project Structure

```
src/
├── index.ts        # Worker entry point — routes requests
├── router.ts       # Route definitions and dispatcher
├── auth.ts         # Bearer token authentication
├── cors.ts         # CORS headers and preflight handling
├── kv.ts           # KV storage helpers (get, set, create, update, delete)
├── types.ts        # Env interface and entity type definitions
├── seed-data.ts    # Initial seed data for all entities
└── seed.ts         # Script to generate wrangler KV put commands
seed-kv.mjs         # Node.js script to seed KV namespace directly
wrangler.toml       # Cloudflare Worker configuration
```

---

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) (installed via `npm install`)
- A Cloudflare account with Workers and KV access

### Setup

```bash
git clone https://github.com/Sebas1705/career-api-worker.git
cd career-api-worker
npm install --ignore-scripts
```

### Run locally

```bash
npx wrangler dev
```

The API will be available at `http://localhost:8787`.

For local development with a local KV namespace, add `[env.development.kv_namespaces]` to `wrangler.toml` or use `--local` flag.

### Seed the KV namespace

After creating the KV namespace, populate it with initial data:

```bash
node seed-kv.mjs
```

This writes all entities (personal, jobs, projects, education, certifications, soft-skills) to the remote KV namespace.

### Deploy

```bash
npx wrangler deploy
```

### Set the API secret

```bash
echo "<your-secret-token>" | npx wrangler secret put API_SECRET
```

---

## Environment & Bindings

| Name | Type | Description |
|---|---|---|
| `CAREER_KV` | KV Namespace | Persistent storage for all entity data |
| `API_SECRET` | Secret | Bearer token required for write operations |
| `ALLOWED_ORIGIN` | Var | CORS allowed origin (default: `*`) |

---

## CORS

All responses include `Access-Control-Allow-Origin: *` (configurable via `ALLOWED_ORIGIN`). `OPTIONS` preflight requests return `204`.

---

## License

MIT
