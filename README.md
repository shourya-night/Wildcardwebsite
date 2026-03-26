# Wild Card by Smart Idea

Production-grade Next.js 14 web application for the Wild Card smart security + attendance + digital ID ecosystem in schools.

## Tech Stack
- Next.js 14 App Router + TypeScript
- TailwindCSS + shadcn-inspired reusable UI
- next-auth (Google OAuth)
- Prisma + PostgreSQL
- ECharts
- Leaflet map tracking
- Light/Dark theme via CSS variables

## Architecture
Feature-driven structure:
- `app/` thin route pages and layouts
- `features/` domain services + server actions
- `components/` reusable UI, charts, tables, and layout blocks
- `lib/` auth, DB client, validators, constants, utilities
- `prisma/` schema + seed data

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure env:
   ```bash
   cp .env.example .env
   ```
3. Generate Prisma client and run migration:
   ```bash
   npm run db:generate
   npm run db:migrate
   ```
4. Seed mock data:
   ```bash
   npm run db:seed
   ```
5. Start dev server:
   ```bash
   npm run dev
   ```

## Authentication flow
- Login via Google OAuth on `/auth/login`
- First login redirects to `/auth/onboarding`
- Onboarding captures role + school profile metadata
- Authenticated users land on `/dashboard`

## Dashboard Modules
- Overview (attendance %, weekly trend, last scan, active alerts)
- Attendance (table + filters + trend)
- Progress Report (line + radar chart)
- Location Tracking (Leaflet map + path history)
- RFID Logs (room entry logs with key columns)
- Security Alerts (fire/door/danger history)

## Vercel build sanity check
If Vercel fails, first verify:
1. `typedRoutes` is **not** enabled in any Next config.
2. `Link` `href` types are plain strings (no RouteImpl / typed-route wrappers).

## Scripts
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run db:seed`

## Final folder tree
```text
app/
  (marketing)/page.tsx
  (auth)/auth/login/page.tsx
  (auth)/auth/sign-up/page.tsx
  (auth)/auth/onboarding/page.tsx
  (dashboard)/dashboard/page.tsx
  (dashboard)/dashboard/attendance/page.tsx
  (dashboard)/dashboard/progress/page.tsx
  (dashboard)/dashboard/location/page.tsx
  (dashboard)/dashboard/logs/page.tsx
  (dashboard)/dashboard/security/page.tsx
  (dashboard)/dashboard/layout.tsx
  api/auth/[...nextauth]/route.ts
components/
  ui/
  layout/
  charts/
  tables/
features/
  auth/
  attendance/
  progress/
  location/
  security/
  logs/
lib/
  auth/
  db/
  validators/
  constants/
  utils/
prisma/
  schema.prisma
  seed.ts
```
