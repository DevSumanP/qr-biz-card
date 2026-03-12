# QR Biz Card — Agent Context

## About This Project

QR Biz Card is a SaaS platform where local businesses get a physical QR stand
that links to a digital business profile page. Customers scan the QR code and
land on a mobile-first profile showing social links, action buttons, photos,
hours, products, and contact info.

- **Type**: Turbo monorepo (Next.js 15 + Sanity CMS)
- **Target users**: Local business owners (restaurants, salons, gyms, retail)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS + CSS custom properties (brand tokens) |
| Database ORM | Prisma 5 (PostgreSQL via Supabase) |
| Auth | Supabase Auth |
| CMS | Sanity v3 (testimonials, FAQs, announcements) |
| Email | Resend |
| File Storage | AWS S3 / Cloudflare R2 |
| QR Generation | qrcode (npm) |
| Forms | React Hook Form + Zod |
| Monorepo | Turborepo |
| Analytics | Custom (QRScan + LinkClick models via Prisma) |

---

## Monorepo Structure

```
QRBizCard/
├── apps/
│   ├── web/          # Next.js 15 — main app
│   └── cms/          # Sanity Studio — content management
├── packages/
│   ├── config/       # Brand tokens (TS + CSS vars + Tailwind base config)
│   └── database/     # Prisma schema + PrismaClient singleton
├── turbo.json
└── package.json      # Root workspace
```

---

## apps/web Folder Structure

```
apps/web/
├── app/
│   ├── (marketing)/          # Public marketing site (no auth)
│   │   ├── page.tsx          # Homepage
│   │   ├── about/
│   │   ├── features/
│   │   ├── pricing/
│   │   └── contact/
│   ├── b/[handle]/           # Public business profile (QR scan destination)
│   │   └── page.tsx          # Mobile-first, no auth required
│   ├── (dashboard)/          # Business owner dashboard (auth required)
│   │   ├── dashboard/        # Overview + analytics summary
│   │   ├── profile/          # Edit business info, links, photos
│   │   ├── analytics/        # Scan & click analytics
│   │   ├── qr-code/          # Download & preview QR code
│   │   ├── billing/          # Plan upgrade
│   │   └── settings/         # Account settings
│   ├── auth/
│   │   ├── login/
│   │   ├── signup/
│   │   └── callback/
│   └── api/
│       ├── analytics/scan/   # POST: record QR scan event
│       ├── analytics/click/  # POST: record link click
│       ├── business/         # CRUD for business profiles
│       ├── qr/               # GET: generate & download QR PNG
│       ├── upload/           # File upload to S3/R2
│       └── contact/          # POST: contact form submission
├── components/
│   ├── layout/               # Navbar, Footer, DashboardSidebar
│   ├── sections/             # Marketing page sections (Hero, Pricing, FAQ etc.)
│   ├── profile/              # Public profile page components
│   ├── dashboard/            # Dashboard UI components
│   ├── forms/                # Reusable form components
│   └── ui/                   # Shared UI primitives
├── lib/
│   ├── sanity/               # Sanity client + queries
│   ├── utils.ts              # cn(), generateHandle(), profileUrl()
│   ├── constants.ts          # PLANS, NAV_LINKS, BUSINESS_CATEGORIES etc.
│   ├── validations.ts        # Zod schemas
│   ├── qr.ts                 # QR code generation helpers
│   └── analytics.ts          # recordScan(), recordClick()
├── types/
│   └── index.ts              # All shared TypeScript types
└── hooks/                    # Custom React hooks
```

---

## Database Models (Prisma)

```
Business          — core profile (handle, name, category, branding, plan)
SocialLink        — instagram, facebook, twitter, linkedin, youtube, tiktok
ActionLink        — WhatsApp, Maps, Menu, Booking, Call, Review buttons
BusinessHours     — Mon–Sun open/close times
BusinessPhoto     — gallery images (Pro+)
Product           — product/service listings (Pro+)
QRScan            — analytics: every scan event with source, UA, location
LinkClick         — analytics: every social/action link click
```

Always import Prisma client as:

```typescript
import { prisma } from '@repo/database'
```

Never instantiate PrismaClient directly in app code.

---

## Brand Design Tokens

**Never hardcode colors or font sizes.** Always use CSS vars or Tailwind brand classes.

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#1a1a2e` | Buttons, headings, QR fill |
| `--color-accent` | `#e94560` | CTAs, highlights, badges |
| `--color-dark` | `#16213e` | Hover states, sidebar bg |
| `--color-mid` | `#0f3460` | Gradients, hero bg |
| `--color-surface` | `#f8f9ff` | Page backgrounds |
| `--color-white` | `#ffffff` | Cards, overlays |
| `--color-ink` | `#111111` | Primary text |
| `--color-subtle` | `#333333` | Secondary text |
| `--color-muted` | `#666666` | Placeholder text |
| `--color-border` | `#e2e8f0` | Borders, dividers |

### Usage Examples

```tsx
// Tailwind (preferred for layouts)
className="bg-brand-primary text-brand-surface"
className="bg-brand-accent text-white rounded-card shadow-card"

// CSS vars (preferred for inline or dynamic styles)
style={{ color: 'var(--color-accent)' }}
style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-card)' }}

// Semantic brand classes (preferred for typography + buttons)
className="brand-h1-bold"    // bold heading
className="brand-body-lg"    // large body text
className="brand-btn"        // primary button (navy)
className="brand-btn-accent" // accent button (red-pink)
className="brand-card"       // white card with shadow + border
```

### Typography Classes

```
brand-display  → 5rem / extrabold
brand-h1-bold  → 3.5rem / bold
brand-h1       → 3.5rem / semibold
brand-h2       → 2.5rem / semibold
brand-h3       → 2rem / semibold
brand-h4       → 1.5rem / semibold
brand-body-lg  → 1.125rem / regular
brand-body     → 1rem / regular
brand-body-sb  → 1rem / semibold
brand-sm       → 0.875rem
brand-micro    → 0.75rem
```

---

## Pricing Plans

| Plan | Price | Key Limits |
|---|---|---|
| FREE | Rs. 0 | 4 social links, no photos/products, 7-day analytics |
| PRO | Rs. 499/mo | Unlimited links, 12 photos, 20 products, 90-day analytics |
| BUSINESS | Rs. 999/mo | 50 photos, 99 products, 5 locations, 365-day analytics |

Plan limits are in `lib/constants.ts` under `PLAN_LIMITS`.
Always check `business.plan` before rendering gated features — show
`<PlanUpgradeBanner />` if the user's plan doesn't support the feature.

---

## Key Files to Know

| File | Purpose |
|---|---|
| `lib/constants.ts` | PLANS, NAV_LINKS, SOCIAL_PLATFORMS, PLAN_LIMITS, HOW_IT_WORKS_STEPS |
| `lib/utils.ts` | cn(), generateHandle(), toWhatsAppUrl(), profileUrl() |
| `lib/validations.ts` | Zod schemas for all forms |
| `lib/qr.ts` | generateQRDataURL(), generateQRBuffer() |
| `lib/analytics.ts` | recordScan(), recordClick() — always fail silently |
| `types/index.ts` | All shared TS types: Business, SocialLink, Product, etc. |
| `packages/config/brand.ts` | Brand tokens as TypeScript constants |
| `packages/config/tailwind.config.base.ts` | Tailwind brand theme extension |
| `packages/database/prisma/schema.prisma` | Full DB schema |
| `.env.local` | All secrets — never commit this file |

---

## Coding Conventions

### General

- Always use TypeScript — no `any`, use proper types from `types/index.ts`
- Use `cn()` from `lib/utils.ts` for conditional classNames — never string concat
- Server Components by default — add `'use client'` only when you need events, hooks, or state
- All forms use React Hook Form + Zod resolver — never uncontrolled inputs
- Break up any component over 100 lines into smaller focused sub-components

### Components

- Profile page components (`components/profile/`) must be **mobile-first**
- Dashboard components (`components/dashboard/`) can be desktop-first
- All marketing page sections go in `components/sections/` — never inline in page files
- Shared primitives (Button, Card, Badge) go in `components/ui/`

### API Routes

- Validate all request bodies with Zod before touching the database
- Always wrap in try/catch and return meaningful HTTP status codes
- Never expose raw error messages to the client in production

### Database

- Always import prisma from `@repo/database` — never instantiate directly
- Analytics writes (QRScan, LinkClick) must always be fire-and-forget —
  wrap in try/catch, never throw, never block page render

### Sanity CMS

- Marketing copy (testimonials, FAQs, announcements) lives in Sanity
- Only fetch Sanity data in Server Components via `lib/sanity/queries.ts`
- Never call the Sanity client from Client Components

---

## Environment Variables

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Database
DATABASE_URL=

# Supabase Auth
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Email
RESEND_API_KEY=
EMAIL_FROM=hello@qrbizcard.com

# Storage
STORAGE_ACCESS_KEY=
STORAGE_SECRET_KEY=
STORAGE_BUCKET=qrbizcard-assets
STORAGE_REGION=

# App
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_PROFILE_BASE_URL=http://localhost:3000/b
```

---

## Common Commands

```bash
# Start web app only
npm run web

# Start Sanity CMS only
npm run cms

# Start everything
npm run dev

# Build all apps
npm run build

# Lint all
npm run lint

# Push DB schema changes
cd packages/database && npx prisma db push

# Regenerate Prisma client after schema change
cd packages/database && npx prisma generate

# Open Prisma Studio (DB browser)
cd packages/database && npx prisma studio

# Type check
npx tsc --noEmit
```

---

## Adding a New Feature (Standard Workflow)

```
1. Types     → add to types/index.ts
2. Schema    → update packages/database/prisma/schema.prisma if DB needed
3. Migrate   → npx prisma db push from packages/database/
4. API route → add under apps/web/app/api/
5. Component → add to correct components/ subfolder
6. Page      → wire into correct app/ route group
7. Constants → add static data to lib/constants.ts
```

---

## Preferred Agent Workflow

```
1. @brainstorming              → clarify before any code
2. @writing-plans              → generate atomic step-by-step plan
3. @frontend-design            → for any UI work
4. @executing-plans            → implement the plan
5. @systematic-debugging       → fix anything that breaks
6. @verification-before-completion → confirm it works
7. @git-pushing                → commit with conventional message
```

For new API routes or DB changes also add `@api-patterns` and `@database-design`.

---

## Common Gotchas

- **CSS cross-package imports**: Never `@import` from `packages/config/globals.css`
  in the app — PostCSS can't resolve cross-package paths. Brand tokens are
  written inline into `apps/web/app/globals.css` directly.
- **Prisma commands**: Always run from `packages/database/`, not the monorepo root
- **recordScan / recordClick**: Must be called from Client Components or API
  routes — not Server Components (they use fetch())
- **Plan gating**: Always check `business.plan` against `PLAN_LIMITS` before
  rendering Pro/Business-only UI — never trust the client
- **QR profile page** (`/b/[handle]`): Keep it Server Component, minimal JS,
  fast load — this is what customers see after scanning the physical QR stand
- **Handle uniqueness**: Always use `generateHandle()` from `lib/utils.ts`
  then check DB for collisions before saving a new business
- **Turbo filter**: To run only one app use `--filter` e.g. `turbo dev --filter=web`
