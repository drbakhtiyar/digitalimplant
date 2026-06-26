# Development Standards — Digitalimplant.az

> **Authoritative reference for all code changes.** These standards are derived from the actual codebase. When a rule here conflicts with the issue description or older documentation, trust this document — it reflects ground truth.

---

## Table of Contents

1. [Project Architecture](#1-project-architecture)
2. [TypeScript Standards](#2-typescript-standards)
3. [Next.js 16 App Router Conventions](#3-nextjs-16-app-router-conventions)
4. [Styling — TailwindCSS v4](#4-styling--tailwindcss-v4)
5. [Component Development](#5-component-development)
6. [i18n Implementation](#6-i18n-implementation)
7. [Performance Standards](#7-performance-standards)
8. [Testing Standards](#8-testing-standards)
9. [Git Workflow](#9-git-workflow)
10. [CI/CD Rules](#10-cicd-rules)
11. [Security](#11-security)
12. [Code Review Checklist](#12-code-review-checklist)

---

## 1. Project Architecture

### Actual Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.2.9 |
| Runtime | React | 19.2.4 |
| Language | TypeScript | ^5 |
| Styling | TailwindCSS | ^4 |
| Linting | ESLint (flat config) | ^9 |
| Form handling | react-hook-form + zod | latest |
| Animations | framer-motion | ^12 |
| Icons | lucide-react | latest |
| Class utilities | clsx + tailwind-merge | latest |
| Fonts | next/font/google | — |
| Deployment | Vercel | — |

> **Note:** The stack uses TailwindCSS v4, **not** CSS Modules. ESLint v9 with flat config is used, **not** `.eslintrc.json`. There is no Prettier installed.

### Directory Structure

```
digitalimplant/
├── app/                        # Next.js App Router root
│   ├── [lang]/                 # Language-scoped routes (az, en, ru)
│   │   ├── layout.tsx          # Lang layout: Header + Footer + WhatsApp CTA
│   │   ├── loading.tsx         # Suspense loading UI
│   │   ├── page.tsx            # Homepage (server component)
│   │   ├── about/
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx # Dynamic blog post
│   │   ├── appointment/
│   │   ├── contact/
│   │   ├── faq/
│   │   ├── gallery/
│   │   ├── brands/
│   │   ├── planning/
│   │   ├── guided-surgery/
│   │   ├── workflow/
│   │   └── 3shape/
│   ├── api/                    # API route handlers (server-only)
│   │   ├── appointment/route.ts
│   │   └── reviews/route.ts
│   ├── globals.css             # TailwindCSS import + @theme tokens + utility classes
│   ├── layout.tsx              # Root layout: fonts, base metadata, <html>/<body>
│   ├── not-found.tsx           # Global 404
│   ├── page.tsx                # Root redirect → /az
│   ├── robots.ts               # robots.txt generator
│   └── sitemap.ts              # sitemap.xml generator
├── components/
│   ├── layout/                 # Site-wide layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── StickyMobileCTA.tsx
│   ├── home/                   # Homepage section components
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── WhyDigital.tsx
│   │   ├── ThreeShapeFeature.tsx
│   │   ├── BrandsSection.tsx
│   │   ├── DoctorSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   ├── ui/                     # Reusable UI primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Badge.tsx
│   │   ├── Breadcrumb.tsx
│   │   └── SectionLabel.tsx
│   ├── blog/                   # Blog-specific components
│   └── faq/                    # FAQ-specific components
├── lib/
│   ├── i18n.ts                 # Lang types, nav strings, route map, hrefLangs()
│   ├── schema.ts               # JSON-LD structured data generators
│   └── blog/
│       └── posts.ts            # Blog post data
├── public/                     # Static assets (images, PDFs, etc.)
├── middleware.ts               # Language redirect middleware
├── next.config.ts              # Next.js config + security headers
├── tsconfig.json               # TypeScript config (strict)
├── eslint.config.mjs           # ESLint flat config
├── postcss.config.mjs          # PostCSS for TailwindCSS v4
├── .env.example                # Environment variable template
└── .gitignore                  # Standard Next.js gitignore
```

### File Naming Rules

| Type | Convention | Example |
|---|---|---|
| React components | PascalCase `.tsx` | `HeroSection.tsx` |
| Page files | lowercase `page.tsx` | `page.tsx` (always) |
| Layout files | lowercase `layout.tsx` | `layout.tsx` (always) |
| Route handlers | lowercase `route.ts` | `route.ts` (always) |
| Utility/lib files | camelCase `.ts` | `i18n.ts`, `schema.ts` |
| CSS | lowercase with hyphens | `globals.css` |

**Rules:**
- App Router reserved files (`page`, `layout`, `loading`, `error`, `not-found`, `route`) must use their exact lowercase names — Next.js requires this.
- All other file names: PascalCase for components, camelCase for utilities.
- Do not create files in `src/` — the project root is the source root.

### Where Things Go

| What | Where |
|---|---|
| New page | `app/[lang]/<route>/page.tsx` |
| Shared UI primitive | `components/ui/` |
| Page-specific sections | `components/<page-name>/` |
| Site-wide chrome | `components/layout/` |
| i18n strings / types | `lib/i18n.ts` |
| JSON-LD generators | `lib/schema.ts` |
| API routes | `app/api/<endpoint>/route.ts` |
| Static assets | `public/` |

---

## 2. TypeScript Standards

### Compiler Settings

From `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "strict": true,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "paths": { "@/*": ["./*"] }
  }
}
```

`"strict": true` enables `strictNullChecks`, `noImplicitAny`, `strictFunctionTypes`, and others. **Do not disable or work around these.**

### Required: Type Every Interface Explicitly

```typescript
// ✅ Good — explicit interface for component props
interface ButtonProps {
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

// ❌ Bad — no type annotation
function Button({ href, variant, children }) { ... }
```

### `interface` vs `type`

- **`interface`** for component props and object shapes that describe a thing (can be extended)
- **`type`** for union types, aliases, and mapped types

```typescript
// Props and object shapes → interface
interface CardProps { title: string; description?: string; }

// Unions and aliases → type
type Lang = "az" | "en" | "ru";
type Size = "sm" | "md" | "lg";
```

### Forbidden Patterns

| Pattern | Rule |
|---|---|
| `any` | Forbidden. Use `unknown`, a union type, or a precise type. |
| `// @ts-ignore` | Forbidden without a code comment explaining the exception. |
| `// @ts-nocheck` | Forbidden entirely. |
| Inline `as any` | Forbidden. Use proper typing or type guards. |
| Untyped `params` from page props | Always type as `Promise<{ lang: string }>` and await. |

### Path Aliases

Always use the `@/` alias instead of relative paths:

```typescript
// ✅ Good
import type { Lang } from "@/lib/i18n";
import Button from "@/components/ui/Button";

// ❌ Bad
import type { Lang } from "../../lib/i18n";
```

### Naming Conventions

| Thing | Convention |
|---|---|
| Types / Interfaces | PascalCase: `Lang`, `ButtonProps` |
| Variables / functions | camelCase: `hrefLangs`, `generateMetadata` |
| Constants | camelCase for objects: `langNames`, `routes` |
| React components | PascalCase: `HeroSection` |
| Enum-like string unions | PascalCase type, lowercase values: `type Lang = "az" \| "en" \| "ru"` |

---

## 3. Next.js 16 App Router Conventions

### Server vs Client Components

By default, **all components are Server Components**. Only add `"use client"` when the component uses:

- `useState`, `useEffect`, `useRef`, or other React hooks
- Browser APIs (`window`, `document`, `localStorage`)
- Event handlers (`onClick`, `onChange`, `onSubmit`) — *unless passed as props from a server parent*
- Third-party client libraries (framer-motion animations, react-hook-form)

```typescript
// Server Component (default — no directive needed)
export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  // fetch data, render static content
  return <article>...</article>;
}

// Client Component (explicit directive required)
"use client";
import { useState } from "react";
export default function ContactForm({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  ...
}
```

**Rule:** Keep client components as leaf nodes (small, deeply nested). Pass data down as props rather than fetching inside client components.

### Page Props Pattern

In Next.js 15+, `params` is a `Promise`. **Always await it:**

```typescript
interface Props {
  params: Promise<{ lang: string }>;
}

export default async function Page({ params }: Props) {
  const { lang } = await params;  // ← must await
  if (!langs.includes(lang as Lang)) notFound();
  const l = lang as Lang;
  // ...
}
```

### `generateStaticParams`

Every `[lang]` page must export `generateStaticParams` to enable static generation for all locales:

```typescript
export async function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}
```

For dynamic pages under `[lang]/blog/[slug]`, export it from the slug page as well.

### `generateMetadata`

Every page must export locale-aware metadata. Use the `hrefLangs()` helper from `@/lib/i18n`:

```typescript
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!langs.includes(lang as Lang)) return {};
  const m = meta[lang as Lang];
  return {
    title: m.title,
    description: m.description,
    alternates: { languages: hrefLangs("/your-route-path") },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `https://digitalimplant.az/${lang}/your-route-path`,
      siteName: "Digital Implant",
      locale: lang,
      type: "website",
    },
  };
}
```

**Rules for metadata:**
- Title: descriptive, includes "Digital Implant" or "Digitalimplant.az"
- Description: 120–160 characters, locale-specific content
- Always include `alternates.languages` with all 3 locale URLs
- Always include `openGraph` with `locale` set to the current lang

### Route Handlers (API Routes)

Place in `app/api/<resource>/route.ts`. Export named HTTP verb functions:

```typescript
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  // validate with zod
  // process
  return NextResponse.json({ success: true }, { status: 200 });
}
```

Always validate input with Zod. Never trust request bodies directly.

### JSON-LD Structured Data

Add JSON-LD schemas on content pages using inline `<script>` tags. Use generators from `@/lib/schema`:

```typescript
const schema = getMedicalBusinessSchema();
return (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
    {/* page content */}
  </>
);
```

Dangerously-set HTML is acceptable here because `JSON.stringify` produces safe output. Do not use `dangerouslySetInnerHTML` anywhere else.

---

## 4. Styling — TailwindCSS v4

> The project uses **TailwindCSS v4**, not CSS Modules. Do not create `.module.css` files.

### How Tailwind Is Configured

`app/globals.css` uses the v4 `@import "tailwindcss"` syntax plus an `@theme` block that declares design tokens:

```css
@import "tailwindcss";

@theme {
  --font-display: var(--font-space-grotesk);
  --font-sans:    var(--font-inter);

  --color-dark:   #050E1F;
  --color-blue:   #0057FF;
  --color-sky:    #00B4FF;
  /* ... */
}
```

These `@theme` variables become first-class Tailwind utilities: `text-blue`, `bg-dark`, `font-display`, etc.

### Design Token Usage

**Always use design tokens; never hardcode color hex values in class names or inline styles.**

```jsx
// ✅ Good — uses theme tokens
<div className="bg-dark text-white border border-border">

// ❌ Bad — hardcoded color
<div style={{ backgroundColor: "#050E1F" }}>
```

Available color tokens: `dark`, `dark-2`, `dark-3`, `dark-4`, `blue`, `blue-light`, `blue-pale`, `sky`, `cyan`, `cyan-dark`, `white`, `off-white`, `muted`, `subtle`.

### Class Name Utilities

Use `clsx` for conditional class names. `tailwind-merge` is available for merging with overrides:

```typescript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// clsx for conditional logic
const cls = clsx("base-class", isActive && "active-class", disabled && "opacity-50");

// twMerge for safely overriding in component APIs
const cls = twMerge(clsx("px-6 py-3", className));
```

### Global Utility Classes

`globals.css` defines utility classes for patterns that can't be expressed as Tailwind utilities:

| Class | Purpose |
|---|---|
| `.glass` | Glassmorphism card background |
| `.glow-blue` | Blue glow box shadow |
| `.glow-sm` | Subtle blue glow |
| `.bg-grid` | Blueprint grid background |
| `.text-gradient` | Cyan gradient text |
| `.text-gradient-white` | White-to-cyan gradient text |
| `.font-display` | Space Grotesk display font |

Add new utility classes to `globals.css` only when the pattern repeats across ≥3 components and cannot be expressed as a Tailwind composition.

### Inline Styles — When to Use

Inline styles are acceptable **only** for:
1. CSS custom property variables that cannot be set via Tailwind: `style={{ fontFamily: "var(--font-inter)" }}`
2. Values computed dynamically at runtime
3. CSS properties not supported by TailwindCSS v4

**Never use inline styles for colors, spacing, fonts, or layout** that can be expressed as Tailwind utilities.

### Responsive Design

Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`). Mobile-first: write the mobile style first, add `lg:` or larger overrides.

```jsx
<div className="px-5 lg:px-10">  {/* matches Container pattern */}
```

---

## 5. Component Development

### Component Template

All components follow this structure:

```typescript
// 1. "use client"; — only if needed
// 2. Imports — external first, then internal (@/)
import { clsx } from "clsx";
import Link from "next/link";
import type { Lang } from "@/lib/i18n";

// 3. Props interface — always explicit
interface HeroProps {
  lang: Lang;
  className?: string;
}

// 4. Default export — named function (not arrow function at top level)
export default function Hero({ lang, className }: HeroProps) {
  return (
    <section className={clsx("relative", className)}>
      {/* content */}
    </section>
  );
}
```

**Rules:**
- Always default-export; never named exports for page components
- Use `interface` for props, not `type`
- `className?: string` on every component that wraps a DOM element (allows callers to style)
- Do not use `React.FC<Props>` — prefer explicit typed parameters

### UI Primitives (`components/ui/`)

UI primitives support `className` override and variant/size props. They compose with `clsx`:

```typescript
// Pattern from Button.tsx
const cls = clsx(base, variants[variant], sizes[size], className);
```

When building a new UI primitive:
1. Define variants as a const object keyed to Tailwind strings
2. Accept `className?: string` for caller overrides
3. Use `clsx` to compose, with `className` last so it can override

### When to Extract a Component

Extract a component when:
- The same JSX structure appears in 2+ places
- A section of a page is ≥50 lines of JSX
- The section manages its own state (`"use client"`)
- The section maps to a clearly named concept (Hero, FAQ, Testimonials)

Do **not** extract for single-use fragments under 20 lines.

### Component Placement Rules

| Scenario | Placement |
|---|---|
| Used across multiple pages | `components/ui/` |
| Used only on homepage | `components/home/` |
| Used only in blog | `components/blog/` |
| Site-wide chrome | `components/layout/` |
| Used only on one page and page-specific | Colocate inside `app/[lang]/<route>/` as a local component file |

---

## 6. i18n Implementation

### Locale Configuration

Three locales are supported: **az** (default), **en**, **ru**. The source of truth is `lib/i18n.ts`:

```typescript
export type Lang = "az" | "en" | "ru";
export const langs: Lang[] = ["az", "en", "ru"];
export const defaultLang: Lang = "az";
```

### URL Structure

```
https://digitalimplant.az/az/         ← Azerbaijani (default)
https://digitalimplant.az/en/         ← English
https://digitalimplant.az/ru/         ← Russian
https://digitalimplant.az/            ← Redirected → /az by middleware
```

### How to Add a New Page

1. Create the page file: `app/[lang]/<route>/page.tsx`
2. Add `generateStaticParams()` returning `langs.map(lang => ({ lang }))`
3. Add locale-aware `generateMetadata()` with `alternates.languages`
4. Add the route slug to `lib/i18n.ts` `routes` map
5. Add nav label in all 3 locales to `lib/i18n.ts` `nav` map
6. Update the sitemap (`app/sitemap.ts`) if it's a content page

### Inline Translation Pattern

Translations are co-located in the page file as a typed const:

```typescript
const content = {
  az: {
    title: "Rəqəmsal Planlaşdırma",
    subtitle: "Hər implant virtual olaraq planlaşdırılır.",
  },
  en: {
    title: "Digital Planning",
    subtitle: "Every implant is virtually planned.",
  },
  ru: {
    title: "Цифровое Планирование",
    subtitle: "Каждый имплант виртуально планируется.",
  },
} as const;

// Usage:
const t = content[lang];
return <h1>{t.title}</h1>;
```

This pattern is preferred over external translation files at current project scale.

### Locale Validation

Always validate lang at page boundary:

```typescript
if (!langs.includes(lang as Lang)) notFound();
const l = lang as Lang;
```

Never skip this check. Unvalidated lang would cause runtime errors in translation lookups.

### `hrefLangs` Helper

Always use `hrefLangs(path)` from `@/lib/i18n` when generating `alternates` metadata:

```typescript
import { hrefLangs } from "@/lib/i18n";

alternates: {
  languages: hrefLangs("/about"),
  // produces: { az: ".../az/about", en: ".../en/about", ru: ".../ru/about" }
}
```

### Middleware Behaviour

`middleware.ts` redirects any URL without a `/az|en|ru/` prefix to `/az`. It ignores:
- `/api/*`
- `/_next/*`
- `/sitemap*`, `/robots*`, `/favicon*`
- Any path with a file extension (`.*\..*`)

**Do not add language detection logic to individual pages** — the middleware handles it.

---

## 7. Performance Standards

### Images

Use `next/image` for all images. Never use raw `<img>` tags:

```tsx
import Image from "next/image";

<Image
  src="/images/doctor.jpg"
  alt="Dr. Bakhtiyar Aliyev"
  width={600}
  height={800}
  priority          // add for above-the-fold images
  className="..."
/>
```

**Rules:**
- Set `priority` on hero/above-the-fold images
- Always provide descriptive, meaningful `alt` text
- Preferred formats in `public/`: WebP for photos, SVG for graphics
- External images must be listed in `next.config.ts` under `images.remotePatterns`

### Fonts

Fonts are loaded via `next/font/google` in the root layout. **Never load fonts via `<link>` tags or `@import` in CSS.** The existing configuration:

```typescript
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});
```

Adding a new font: add it to the root layout only, export its CSS variable, and define it in `globals.css` `@theme`.

### Code Splitting

- Keep server components as default — they are excluded from the client bundle
- `"use client"` components are split automatically by Next.js
- For heavy client libraries (framer-motion), import inside `"use client"` components only
- Use `next/dynamic` with `{ ssr: false }` for browser-only third-party widgets

### Lighthouse Targets

| Metric | Target |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | 100 |

Run Lighthouse against production (`digitalimplant.az`) after significant UI changes.

---

## 8. Testing Standards

> No test framework is currently configured. This section defines the standard to adopt when tests are added.

### When Tests Are Added

Recommended stack: **Vitest** + **React Testing Library** for unit/component tests.

### What Must Have Tests

| Coverage target | Priority |
|---|---|
| `lib/i18n.ts` — `hrefLangs()`, `langs`, route map | High |
| `lib/schema.ts` — JSON-LD output shape | High |
| API routes (`app/api/*/route.ts`) — valid/invalid input | High |
| Form validation schemas (Zod) | High |
| UI primitive components (Button, Container) | Medium |
| Middleware redirect logic | Medium |

### i18n Route Testing

When testing i18n routes, test all 3 locales (`az`, `en`, `ru`) including:
1. Valid locale renders page
2. Invalid locale returns 404 (calls `notFound()`)
3. Root path redirects to `/az`

### No Snapshots

Do not write snapshot tests. Prefer explicit assertions against rendered output:

```typescript
// ✅ Explicit assertion
expect(screen.getByRole("heading", { name: /Digital Planning/ })).toBeInTheDocument();

// ❌ Snapshot — too brittle, too opaque
expect(container).toMatchSnapshot();
```

---

## 9. Git Workflow

### Branch Naming

```
feat/<short-description>      ← new feature
fix/<short-description>       ← bug fix
chore/<short-description>     ← dependencies, config, tooling
docs/<short-description>      ← documentation only
refactor/<short-description>  ← no behavior change
```

Examples: `feat/add-gallery-page`, `fix/mobile-header-overflow`, `docs/development-standards`

### Commit Message Format — Conventional Commits

```
<type>(<scope>): <subject>

[optional body]

Co-Authored-By: Paperclip <noreply@paperclip.ing>
```

**Types:** `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `test`, `perf`

**Scope:** component or area changed (e.g., `hero`, `header`, `i18n`, `api`, `seo`)

**Subject:** imperative, lowercase, no period

```
feat(gallery): add image lightbox for mobile
fix(header): prevent nav overflow on small screens
chore(deps): update next to 16.2.9
docs(standards): add development standards document
```

**Co-author line is mandatory** on every commit: `Co-Authored-By: Paperclip <noreply@paperclip.ing>`

### PR Requirements

Before opening a PR:
1. Branch is up to date with `main`
2. `npm run lint` passes with no errors
3. `npm run build` succeeds locally
4. All changed pages render correctly at `/az`, `/en`, `/ru`
5. No secrets or credentials in the diff
6. PR description explains *what* changed and *why*

### Commit Hygiene

- One logical change per commit
- Do not commit `node_modules`, `.next/`, `.env*` (enforced by `.gitignore`)
- Do not force-push `main`

---

## 10. CI/CD Rules

### What Must Pass Before Merge

| Check | Command | Required |
|---|---|---|
| Lint | `npm run lint` | Yes |
| TypeScript | `npm run build` (type errors fail build) | Yes |
| Build | `npm run build` | Yes |

> Currently no GitHub Actions workflows exist. When added, they must run all three checks on every PR targeting `main`.

### Recommended GitHub Actions Workflow (to add)

```yaml
name: CI
on: [pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: "20", cache: "npm" }
      - run: npm ci
      - run: npm run lint
      - run: npm run build
```

### Deployment to Vercel

- **main branch** auto-deploys to production at `digitalimplant.az`
- Preview deployments are created for every PR
- After merging to main, verify the production deployment in the Vercel dashboard before closing the PR

### Deployment Verification Checklist

After every production deployment:
- [ ] `https://digitalimplant.az/az` loads (200 OK, correct content)
- [ ] `https://digitalimplant.az/en` and `/ru` load
- [ ] `https://digitalimplant.az/` redirects to `/az`
- [ ] Core Web Vitals not degraded (check Vercel Analytics)
- [ ] New pages/routes return 200, not 500/404
- [ ] Any changed forms still submit successfully

### Handling Failing Builds

1. Never merge a PR with a failing build
2. Fix locally: `npm run build` and resolve errors
3. If a third-party dependency causes the failure: pin to the last working version, open a separate issue to upgrade
4. If a type error is introduced by a dependency update: add minimal type shim in `*.d.ts`, document why in a comment

---

## 11. Security

### Environment Variables

Three Google API credentials are required (see `.env.example`):

```
GOOGLE_CLIENT_EMAIL=...
GOOGLE_PRIVATE_KEY="..."
GOOGLE_LOCATION_NAME=...
```

**Rules:**
- Store secrets in `.env.local` (never committed — excluded by `.gitignore`)
- Never commit `.env.local` or any file containing real credentials
- `.env.example` must list all required keys with placeholder values — update it when adding new env vars
- Only access environment variables in server-side code (API routes, Server Components, `next.config.ts`)
- Never expose secrets to client components — any `process.env.X` accessed in `"use client"` code is bundled into the client

### Security Headers

Security headers are configured in `next.config.ts` and applied to all routes:

| Header | Value |
|---|---|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | camera, microphone, geolocation disabled |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |

Do not remove these headers. Add new ones if a security review requires it.

### XSS Prevention

- **Never use `dangerouslySetInnerHTML`** except for JSON-LD `<script>` tags where the content is produced by `JSON.stringify` (safe, not user-controlled)
- Never render user-supplied content as raw HTML
- Validate and sanitize all form inputs on the server with Zod before processing

### Input Validation in API Routes

All API routes must validate request bodies with Zod before touching any business logic:

```typescript
import { z } from "zod";

const appointmentSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().regex(/^\+?[0-9]{7,15}$/),
  message: z.string().max(1000).optional(),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = appointmentSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  // proceed with result.data
}
```

### Dependency Security

- Run `npm audit` before adding new dependencies
- Prefer packages with recent maintenance history and wide adoption
- Do not add dependencies with known critical CVEs without a documented mitigation plan

---

## 12. Code Review Checklist

Use this checklist before approving any PR.

### Correctness

- [ ] The change does what the PR description claims
- [ ] All 3 locales (`/az`, `/en`, `/ru`) are handled — no locale-specific dead code
- [ ] `generateStaticParams` exports from every new `[lang]` page
- [ ] `generateMetadata` is present with correct `alternates.languages`
- [ ] `params` is awaited before destructuring in Next.js 15+ pages

### TypeScript

- [ ] No `any` types introduced
- [ ] No `// @ts-ignore` without explanation
- [ ] All new component props have explicit interface
- [ ] `lang` variables typed as `Lang` (not `string`) after validation

### Styling

- [ ] No raw `<img>` tags — `next/image` only
- [ ] No hardcoded hex colors in JSX — uses Tailwind tokens
- [ ] No `.module.css` files created (project uses TailwindCSS v4)
- [ ] `className?: string` accepted on components that wrap DOM elements

### Security

- [ ] No secrets or credentials in the diff
- [ ] No new `dangerouslySetInnerHTML` (except JSON-LD with `JSON.stringify`)
- [ ] API routes validate input with Zod
- [ ] New env vars added to `.env.example` with placeholder values

### Performance

- [ ] New images use `next/image` with explicit `width`/`height` and `alt`
- [ ] `priority` set on above-the-fold images
- [ ] Heavy libraries imported inside `"use client"` components only

### i18n

- [ ] New routes added to `lib/i18n.ts` `routes` map
- [ ] Nav labels added in all 3 locales in `lib/i18n.ts` `nav` map
- [ ] Sitemap updated if new public content page added

### Git

- [ ] Commit messages follow Conventional Commits format
- [ ] Every commit includes `Co-Authored-By: Paperclip <noreply@paperclip.ing>`
- [ ] No unrelated changes bundled into the PR

### Build

- [ ] `npm run lint` passes (0 errors)
- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors

---

*Document generated 2026-06-26. Based on codebase state at commit HEAD of `drbakhtiyar/digitalimplant` main branch.*
