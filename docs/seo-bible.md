# SEO Bible — Digitalimplant.az

**Version**: 1.0  
**Date**: 2026-06-26  
**Owner**: SEO Manager  
**Scope**: Permanent reference for all SEO decisions on [digitalimplant.az](https://digitalimplant.az)  
**Tech stack**: Next.js 16, TypeScript, Tailwind CSS, App Router  

---

## Table of Contents

1. [Site Architecture & URL Conventions](#1-site-architecture--url-conventions)
2. [Keyword Strategy](#2-keyword-strategy)
3. [On-Page SEO Standards](#3-on-page-seo-standards)
4. [Technical SEO Rules](#4-technical-seo-rules)
5. [Local SEO](#5-local-seo)
6. [Multilingual SEO](#6-multilingual-seo)
7. [Content SEO](#7-content-seo)
8. [Competitive Landscape](#8-competitive-landscape)
9. [KPIs & Measurement](#9-kpis--measurement)

---

## 1. Site Architecture & URL Conventions

### URL Structure

All URLs follow the pattern `https://digitalimplant.az/[lang]/[page]`.

| Lang code | Audience | Priority |
|-----------|----------|----------|
| `az` | Azerbaijani speakers (default) | Primary |
| `ru` | Russian speakers (significant market) | Secondary |
| `en` | International / medical tourism | Tertiary |

The middleware (`middleware.ts`) redirects rootless requests to `/az`. This means:
- Canonical base is always `/az` for Azerbaijani content
- `digitalimplant.az/` → `digitalimplant.az/az` (301 redirect)
- Never link to bare `/contact` — always link to `/az/contact` or the lang-prefixed variant

### Page Inventory

| Slug | URL pattern | Intent |
|------|-------------|--------|
| Home | `/[lang]` | Navigational + transactional |
| Digital Planning | `/[lang]/planning` | Informational + transactional |
| Guided Surgery | `/[lang]/guided-surgery` | Informational + transactional |
| 3Shape Studio | `/[lang]/3shape` | Informational |
| Workflow | `/[lang]/workflow` | Informational |
| Brands | `/[lang]/brands` | Informational |
| Gallery | `/[lang]/gallery` | Trust/social proof |
| FAQ | `/[lang]/faq` | Informational + featured snippet target |
| About | `/[lang]/about` | E-E-A-T / trust |
| Blog | `/[lang]/blog` | Informational (organic traffic driver) |
| Contact | `/[lang]/contact` | Navigational + local |
| Appointment | `/[lang]/appointment` | Transactional |

**Rule**: URLs must stay in English slugs regardless of language (already implemented). Never translate slugs to Azerbaijani or Russian — it breaks consistency and canonical chains.

---

## 2. Keyword Strategy

### 2.1 Primary Keywords (High-Priority Targets)

These are the money terms. Every content, link-building, and schema decision must serve these first.

#### Azerbaijani (az)

| Keyword | Intent | Target Page |
|---------|--------|-------------|
| diş implantı Bakı | Transactional | Home |
| rəqəmsal implant Bakı | Transactional | Home |
| implant planlaşdırması Bakı | Transactional | /planning |
| rehberli cərrahiyyə Bakı | Transactional | /guided-surgery |
| 3Shape Implant Studio Bakı | Informational/transactional | /3shape |
| diş implantı qiyməti Bakı | Transactional | Home / FAQ |
| Bakıda implantologiya | Transactional | Home |
| rəqəmsal diş klinikası Bakı | Navigational + transactional | Home |

#### Russian (ru)

| Keyword | Intent | Target Page |
|---------|--------|-------------|
| зубные импланты Баку | Transactional | Home /ru |
| имплантация зубов Баку | Transactional | Home /ru |
| цифровое планирование имплантов Баку | Transactional | /ru/planning |
| направляемая хирургия Баку | Transactional | /ru/guided-surgery |
| стоматология Баку имплантология | Transactional | Home /ru |
| 3Shape Implant Studio Баку | Informational | /ru/3shape |
| All-on-4 Баку | Transactional | Home / Blog |
| сколько стоит имплант Баку | Transactional | FAQ |

### 2.2 Secondary Keywords

These support head terms and capture mid-funnel informational intent.

#### Azerbaijani

- CBCT planlaşdırma Bakı
- virtual cərrahiyyə simulyasiyası
- cərrahi şablon 3D çap Bakı
- Straumann implant Bakı
- Bredent implant Azərbaycan
- All-on-4 Bakı
- tam çənə rehabilitasiyası Bakı
- implant üstündən protez Bakı

#### Russian

- хирургический шаблон 3D Баку
- КТ планирование импланта
- виртуальная хирургия стоматология
- Straumann All-on-4 Баку
- протез на имплантах Баку
- полная дуга имплантация Баку
- имплант за один день Баку

### 2.3 Long-Tail Keywords

Long-tail captures users deep in the decision funnel. Priority targets for blog articles and FAQ content:

#### Azerbaijani

- "diş implantı əvvəl nə lazımdır Bakı"
- "implant cərrahiyyəsindən sonra bərpa müddəti"
- "3Shape Implant Studio nədir"
- "rəqəmsal implantologiya adi implantologiyadan nə ilə fərqlənir"
- "CBCT tomoqrafiya diş implantı üçün"
- "eyni gündə implant Bakı Bredent"
- "sümük transplantasiyası olmadan implant mümkündürmü"

#### Russian

- "что такое направляемая хирургия в стоматологии"
- "3Shape Implant Studio как работает"
- "цифровой рабочий процесс имплантации"
- "имплант за один день Баку цена"
- "КЛКТ для планирования импланта"
- "Straumann BLX Баку"

### 2.4 Search Intent Mapping by Page

| Page | Primary Intent | Content Format |
|------|---------------|----------------|
| Home | Transactional: "get implants in Baku" | Service overview, trust signals, CTA |
| /planning | Informational → Transactional | Step-by-step process explanation |
| /guided-surgery | Informational → Transactional | Technique explainer + safety benefits |
| /3shape | Informational | Software feature breakdown |
| /brands | Informational | Brand comparison/trust |
| /faq | Informational | Q&A format, featured snippet targets |
| /blog/* | Informational | Long-form educational articles |
| /appointment | Transactional | Minimal friction, form-first |

### 2.5 Keyword Clustering Rules

- **Never put two pages after the same keyword**. If `/planning` targets "rəqəmsal implant planlaşdırması", the home page should target "rəqəmsal implant Bakı" (broader). Review for cannibalization quarterly.
- Blog posts must target long-tail variations not used on service pages.
- One primary keyword per page/language combination. Map it in the page's `metaTitle` and H1.

---

## 3. On-Page SEO Standards

### 3.1 Title Tag Templates

Format: `[Primary Keyword] | Digital Implant` (max 60 characters)

Existing examples in codebase that confirm this pattern:
- `"Rəqəmsal İmplant Planlaşdırması Bakı | Digital Implant"` ✓
- `"Digital Implant Bakı — Rəqəmsal İmplantologiya Dr. Bakhtiyar Əliyev"` ✓ (home page — extended brand format acceptable)

**Rules**:
- Home page: `[City] + [Brand Differentiator] + Doctor Name | Brand` (already correctly implemented)
- Service pages: `[Service Keyword] + [City] | Digital Implant` 
- Blog posts: `[Long-tail question/keyword] | Digital Implant Bakı`
- FAQ page: Use a specific FAQ keyword in the title, not just "FAQ"
- Max 60 characters for service/blog pages; home page can extend to 70 for brand signal
- Always include "Bakı" (az) or "Баку" (ru) in titles for local signal
- Template variable in `layout.tsx` root metadata: `template: "%s | Digital Implant"` — child pages must export only the `%s` portion

### 3.2 Meta Description Rules

- Length: 140–155 characters (rendered limit, not hard truncation)
- Must contain the primary keyword naturally
- Must contain a benefit or differentiator (e.g., "virtual planning", "Dr. Bakhtiyar Aliyev")
- Should contain a soft CTA where intent is transactional ("Randevu alın" / "Запишитесь")
- Never duplicate across pages or languages
- Existing good example (home/az): `"Bakıda rəqəmsal implantologiya. 3Shape Implant Studio, rehberli cərrahiyyə və CBCT planlaşdırma ilə hər implant virtual olaraq planlaşdırılır. Dr. Bakhtiyar Əliyev."` ✓

### 3.3 Heading Hierarchy

Each page must have exactly one `<h1>`. Current implementation uses JSX `<h1>` inside service pages — this is correct.

| Level | Role | Rules |
|-------|------|-------|
| H1 | Page topic = primary keyword | One per page, matches title tag topic |
| H2 | Main section headers | 2–6 per page, each targets a secondary or LSI keyword |
| H3 | Sub-sections / steps | Process steps (e.g., planning steps 01–06), FAQ answers |
| H4+ | Rarely needed | Only for deeply nested content (comparison tables) |

**Current implementation status**: The planning page uses H1 for the title and H2 for "Üstünlüklər" / "Benefits" — correct pattern. Step items currently use H3. This is the canonical structure to follow across all service pages.

### 3.4 Internal Linking Rules

- Every service page must link to `/appointment` (CTA anchor)
- Home page must link to all 5 core service pages: `/planning`, `/guided-surgery`, `/3shape`, `/workflow`, `/brands`
- Blog posts must link to 1–2 relevant service pages and 1–2 other blog posts
- FAQ page must link to relevant service pages for each answer topic
- Use descriptive anchor text with keywords (never "click here" or "buraya baxın")
- Example: `<Link href="/az/planning">Rəqəmsal İmplant Planlaşdırması</Link>` ✓

### 3.5 Image Alt-Text Standards

All images must have descriptive alt text containing relevant keywords. File task for Image Manager for each batch of images.

Format: `[what is shown] — [context] — [brand]`  
Example: `"Dr. Bakhtiyar Əliyev 3Shape Implant Studio ilə implant planlaşdırması — Digital Implant Bakı"`

- Never empty alt text on content images
- Decorative backgrounds/patterns: `alt=""` (empty, correct for screen readers)
- Logo: `alt="Digital Implant — Rəqəmsal İmplantologiya Bakı"`

---

## 4. Technical SEO Rules

### 4.1 Sitemap Standards

Current `sitemap.ts` is correctly implemented but requires two improvements:

**What's good**:
- Covers all 12 static routes × 3 languages = 36 entries
- Covers blog posts × 3 languages
- Correct `changeFrequency` (weekly for home, monthly for others)
- Priority: home = 1.0, service pages = 0.7, blog = 0.6

**Required improvements**:
1. Blog priority should be 0.6 ✓ (already set)
2. The appointment page should have priority 0.8 (highest conversion intent) — currently set to 0.7, same as all service pages
3. `lastModified: new Date()` is dynamic on every build — this is acceptable for static sites with frequent deploys, but ideally should use file-level `git` timestamps for blog posts (already implemented via `post.isoDate`)

**Priority tiers to implement**:
| Priority | Pages |
|----------|-------|
| 1.0 | Home (`/[lang]`) |
| 0.8 | `/appointment` |
| 0.7 | `/planning`, `/guided-surgery`, `/3shape`, `/faq`, `/about`, `/contact` |
| 0.6 | `/brands`, `/gallery`, `/workflow`, Blog posts |

### 4.2 Robots.txt Rules

Current `robots.ts` is minimal but correct:
```
User-agent: *
Allow: /
Sitemap: https://digitalimplant.az/sitemap.xml
```

**What NOT to block**: All current pages should remain indexable.  
**Future rules**: If staging/preview environments are added, add `Disallow` rules for `/api/` endpoints if any become public, and `Disallow: /admin/` if an admin panel is created.

Never block CSS or JS files (pre-render testing tools need them for rendering evaluation).

### 4.3 Canonical URL Policy

- Implemented via Next.js `metadataBase: new URL("https://digitalimplant.az")` in root `layout.tsx` ✓
- Each page should declare `alternates.canonical` if at risk of duplicate content
- The middleware redirect from `/` to `/az` generates a 307 (temporary) — this should be 308 or 301 for SEO. **File task for Frontend/UI Manager**: Change `NextResponse.redirect` to use status 301 for the lang redirect.
- Trailing slashes: Never use them. `digitalimplant.az/az` not `digitalimplant.az/az/`

### 4.4 Core Web Vitals Targets

Google's thresholds for "Good" classification:

| Metric | Target | Current Risk |
|--------|--------|-------------|
| LCP (Largest Contentful Paint) | < 2.5s | Hero images — ensure WebP format, lazy-load below fold |
| INP (Interaction to Next Paint) | < 200ms | Framer Motion animations — monitor JS bundle size |
| CLS (Cumulative Layout Shift) | < 0.1 | Font loading (Space Grotesk + Inter with `display: swap`) |
| FCP (First Contentful Paint) | < 1.8s | Server-rendered (SSG) content, good baseline |
| TTFB (Time to First Byte) | < 800ms | Vercel edge network |

**Implementation rules**:
- All images: use Next.js `<Image>` component with explicit `width`, `height`, and `priority` for above-fold images
- Hero image: must have `priority={true}` to preload
- Framer Motion animations: use `LazyMotion` with `domAnimation` feature set only
- Google Fonts: already using `display: "swap"` ✓

### 4.5 Structured Data (Schema.org)

**Implemented schemas** (in `lib/schema.ts`):

| Schema Type | Implementation | Quality |
|-------------|----------------|---------|
| `Dentist` + `MedicalBusiness` | Home page | ✓ Good — has address, geo, hours |
| `MedicalProcedure` | Service pages via `getMedicalServiceSchema()` | ✓ Good |
| `FAQPage` | FAQ page via `getFAQSchema()` | ✓ Good |
| `MedicalWebPage` | Blog articles via `getArticleSchema()` | ✓ Good |
| `BreadcrumbList` | Available via `getBreadcrumbSchema()` | Needs implementation on service pages |

**Required additions**:

1. **`Physician` schema for Dr. Bakhtiyar Aliyev** — add to About page:
```json
{
  "@type": "Physician",
  "name": "Dr. Bakhtiyar Aliyev",
  "medicalSpecialty": "Dentistry",
  "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "Implantologist" },
  "worksFor": { "@type": "Dentist", "name": "Digital Implant", "url": "https://digitalimplant.az" }
}
```

2. **`BreadcrumbList` on all service pages** — currently the function exists but is not called. File task for Frontend/UI Manager to implement on all interior pages.

3. **`Review`/`AggregateRating`** — once patient reviews are collected, add aggregate rating to the main Dentist schema. Minimum 5 reviews required before publishing.

4. **hreflang in structured data**: The `alternates.languages` in `[lang]/layout.tsx` currently only lists az/en/ru — not `x-default`. Add `"x-default": "https://digitalimplant.az/az"` to the alternates object.

---

## 5. Local SEO

### 5.1 NAP (Name, Address, Phone)

The NAP must be consistent across all platforms. Canonical format:

```
Name:     Digital Implant — Dr. Bakhtiyar Aliyev
Address:  Babek prospekti, Babək plaza, Bakı, AZ1025, Azərbaycan
Phone:    +994 10 501 01 07
Website:  https://digitalimplant.az
Email:    info@smilebydrbakhtiyar.com
```

**Critical rule**: This exact format must appear on the website's Contact page, footer, and all citation sites. Any variation (e.g., abbreviating "prospekti" or omitting the postal code) creates inconsistency that weakens local signals.

**Current code NAP** (from `schema.ts`):
- Address: `"Babek prospekti, Babək plaza"` + `"Bakı"` + `"AZ"` + `"AZ1025"` ✓
- Phone: `"+994105010107"` — formatted version `+994 10 501 01 07` must be used in displayed HTML
- Email: `info@smilebydrbakhtiyar.com` ✓

### 5.2 Google Business Profile (GBP) Optimization

Priority actions for GBP:

1. **Category**: Primary = "Dental implants periodontist" or "Dental clinic"; Secondary = "Oral surgeon", "Dentist"
2. **Business name**: "Digital Implant — Dr. Bakhtiyar Aliyev" (match schema.ts name exactly)
3. **Description** (750 chars max, first 250 most important): Lead with the digital/technology differentiator — "Bakıda yeganə tam rəqəmsal implantologiya mərkəzi. 3Shape Implant Studio ilə hər implant virtual olaraq planlaşdırılır. Dr. Bakhtiyar Əliyev..."
4. **Photos**: Minimum 10 photos — clinic exterior, interior, 3Shape workstation, Dr. Aliyev, before/after cases (with consent)
5. **Services**: Add each service from the site's page inventory as a GBP service with the Azerbaijani name and description
6. **Posts**: Publish 1–2 GBP posts per week linking to blog articles or service pages
7. **Q&A**: Pre-seed common questions matching FAQ page content
8. **Reviews**: Actively collect reviews post-treatment — reviews directly improve local pack rankings

### 5.3 Local Citation Strategy

Target directories for NAP listings (Azerbaijan market):

| Platform | Priority | Notes |
|----------|----------|-------|
| Google Business Profile | Critical | Foundation of local SEO |
| Yandex Business | High | Russian-speaking audience uses Yandex |
| 2GIS | High | Popular in CIS countries including Azerbaijan |
| Foursquare / Swarm | Medium | Feeds many aggregators |
| Facebook Business Page | High | Active in Azerbaijan market |
| Instagram Business | High | Visual proof + local signals |
| Azerbaijani medical directories (tibbimehz.az, etc.) | High | Niche authority |
| Yelp | Low | Minimal Azerbaijan traffic |

### 5.4 Local Content Strategy

- Create location-specific landing page content mentioning "Bakı" naturally in body text (not keyword stuffed)
- Reference local landmarks near the clinic ("Babək plaza yaxınlığında", "Bakı şəhər mərkəzinə yaxın")
- Blog posts should mention Baku context where natural

---

## 6. Multilingual SEO

### 6.1 hreflang Implementation

Current implementation in `[lang]/layout.tsx`:
```typescript
alternates: {
  languages: {
    az: `https://digitalimplant.az/az`,
    en: `https://digitalimplant.az/en`,
    ru: `https://digitalimplant.az/ru`,
  },
}
```

**Missing**: `x-default` annotation. Required fix:
```typescript
alternates: {
  languages: {
    "x-default": "https://digitalimplant.az/az",
    az: `https://digitalimplant.az/az${path}`,
    en: `https://digitalimplant.az/en${path}`,
    ru: `https://digitalimplant.az/ru${path}`,
  },
}
```

The `hrefLangs()` utility in `lib/i18n.ts` must also include `x-default`. File task for Frontend/UI Manager.

**Validation rules**:
- Each URL's hreflang must link back to every other language URL (reciprocal) — Next.js handles this ✓
- All three language versions of a page must exist before hreflang is declared — blog posts must have all three language variants before publishing
- Use BCP 47 language codes: `az`, `ru`, `en` (not `az-AZ`)

### 6.2 Language Targeting Strategy

| Language | Target audience | Search engine | Strategy |
|----------|----------------|---------------|----------|
| `az` | Azerbaijani speakers in Azerbaijan | Google.az / Google.com | Primary; all content must be fully translated |
| `ru` | Russian-speaking residents of Azerbaijan | Google.com + Yandex | Full translation; Yandex GBP listing essential |
| `en` | Medical tourism (Turkey, Georgia, Europe) | Google.com | English content supports international patients; tertiary priority |

**Content parity rule**: All three language versions of a page must have equivalent content length and quality. Do not launch partial translations.

### 6.3 Language-Specific Keyword Notes

- Azerbaijani Google searches for dental services often mix Azerbaijani and Russian — "diş implantı" and "diş implantı Bakı" are both valid search queries
- Russian searches on Google.com.az still have significant volume from Azerbaijan
- Do not translate brand names: "Straumann", "Bredent", "3Shape Implant Studio" remain identical in all languages

---

## 7. Content SEO

### 7.1 Blog Article SEO Checklist

Before publishing any blog post, verify all of the following:

**Pre-publish checklist**:
- [ ] Target keyword identified and not cannibalized with an existing page
- [ ] `metaTitle` contains primary keyword + "| Digital Implant Bakı" (< 65 chars)
- [ ] `metaDescription` 140–155 chars, contains keyword + benefit
- [ ] Keywords array populated for all three languages in `posts.ts`
- [ ] `isoDate` set to actual publish date (ISO 8601 format)
- [ ] `readTime` estimated accurately (200 words/minute)
- [ ] Article body has exactly one H1 matching the title
- [ ] At least 2 H2 section headers with secondary keywords
- [ ] At least one internal link to a service page
- [ ] At least one internal link to another blog post (once 2+ exist)
- [ ] `getArticleSchema()` called with correct `url`, `datePublished`
- [ ] `getBreadcrumbSchema()` implemented: Home → Blog → Article
- [ ] All three language variants (`az`, `en`, `ru`) complete before publishing
- [ ] `hreflang` entries for all three language versions

**Content structure for blog posts**:
- Minimum 800 words per language version (aim for 1200+)
- Lead with the problem/question the searcher has
- Use structured steps/lists where applicable (targets featured snippets)
- End with CTA linking to `/appointment`

### 7.2 Internal Linking Map

```
Home
├── → /planning (anchor: "Rəqəmsal Planlaşdırma")
├── → /guided-surgery (anchor: "Rehberli Cərrahiyyə")
├── → /3shape (anchor: "3Shape Implant Studio")
├── → /brands (anchor: "İmplant Markaları")
├── → /about (anchor: "Dr. Bakhtiyar Əliyev haqqında")
└── → /appointment (CTA anchor: "Randevu al")

/planning
├── → /guided-surgery (related service)
├── → /3shape (tool used in planning)
└── → /appointment (CTA)

/guided-surgery
├── → /planning (prerequisite service)
└── → /appointment (CTA)

/3shape
├── → /planning (application of 3Shape)
└── → /appointment (CTA)

/faq
├── → /planning (for implant process questions)
├── → /guided-surgery (for surgery questions)
└── → /appointment (CTA)

/blog/*
├── → 1–2 relevant service pages
├── → 1–2 related blog posts
└── → /appointment (CTA)
```

### 7.3 Content Freshness Guidelines

| Content type | Review frequency | Action on review |
|-------------|-----------------|-----------------|
| Home page metadata | Quarterly | Update if primary keywords shift |
| Service page content | Semi-annually | Add new procedures, update pricing context |
| FAQ page | Quarterly | Add new patient questions; remove outdated answers |
| Blog posts | At publication | No edits needed unless factual error |
| Schema.org data | On any NAP change | Immediate update |
| Sitemap | Auto-generated on build | Verify post.isoDate is accurate |

### 7.4 Featured Snippet Targeting

The FAQ page is the primary featured snippet target. Format requirements:
- Each Q&A uses a direct question as the H3 heading
- Answer starts with a direct declarative sentence answering the question
- Keep answers 40–60 words for paragraph snippets
- For procedural content (planning steps), use numbered lists — Google extracts these as list snippets

Target FAQ snippets for these queries:
- "diş implantı nə qədər davam edir" (how long do dental implants last)
- "rəqəmsal implant planlaşdırması nədir" (what is digital implant planning)
- "implant cərrahiyyəsi ağrılıdırmı" (is implant surgery painful)
- "3Shape Implant Studio nədir" (what is 3Shape Implant Studio)

---

## 8. Competitive Landscape

### 8.1 Key Competitors in Azerbaijan Dental Market

The Azerbaijan dental implant market is dominated by a handful of visible online players. Digital Implant's differentiation is the **full digital workflow** (CBCT + 3Shape + guided surgery) — no competitor in Baku currently markets this combination explicitly at this level of technical depth.

**Tier 1 — Direct competitors** (implant-focused clinics):
- Clinics on Neftchilar Avenue and Nizami Street with Google Business Profiles and some online presence
- International chains with Baku branches (if any from Turkey/Georgia)

**Tier 2 — General dental clinics** ranking for "diş klinikası Bakı" — these rank for broad dental terms but rarely for implant-specific queries

**Competitive gap opportunities**:
1. **"rəqəmsal implant planlaşdırması"** — Very low competition; Digital Implant is positioned to own this category
2. **"3Shape Bakı"** — Near-zero competition; direct brand searches are uncontested
3. **"rehberli cərrahiyyə Bakı"** — Low competition; educational content wins here
4. **Long-tail Russian queries** about digital implantology — poorly served in Azerbaijan market
5. **Medical tourism keywords** — "dental implants Baku" in English has potential from Georgian/Turkish neighbors

### 8.2 Competitive Content Gaps

Based on market analysis, the following content types are missing from competitor sites and represent quick wins:

| Content Gap | Page to Create/Optimize | Priority |
|-------------|------------------------|----------|
| 3Shape Implant Studio explainer | `/3shape` page (exists, optimize) | High |
| Digital vs traditional implants comparison | Blog article | High |
| Implant brand comparison (Straumann vs Bredent vs others) | `/brands` page + blog | Medium |
| Guided surgery safety data | Blog article | Medium |
| CBCT planning process | Part of `/planning` (exists) | Done |
| Cost transparency/price range | FAQ entry | High |
| Before/after gallery with case studies | `/gallery` | Medium |

---

## 9. KPIs & Measurement

### 9.1 Primary KPIs

| KPI | Target (6-month) | Measurement |
|-----|-----------------|-------------|
| Organic sessions (total) | +150% YoY | Google Analytics 4 |
| Organic sessions (az content) | Top priority | GA4 by language segment |
| Impressions for "diş implantı Bakı" | Top 5 position | Google Search Console |
| Impressions for "implant planlaşdırması" | Position 1–3 | GSC |
| Clicks from Google Maps (local pack) | +100% | GBP Insights |
| Appointment form submissions from organic | Baseline → track conversions | GA4 Goal |
| Core Web Vitals "Good" rating | All three metrics in green | GSC Core Web Vitals report |

### 9.2 Google Search Console Setup

**Required configurations**:
1. Verify property: `https://digitalimplant.az` (not just HTTP)
2. Submit sitemap: `https://digitalimplant.az/sitemap.xml`
3. Set target country: Azerbaijan (in legacy Search Console settings)
4. Monitor these report sections weekly:
   - Performance → Queries (filter by az language pages)
   - Coverage → Errors (ensure no 404s or soft 404s)
   - Core Web Vitals (both mobile and desktop tabs)
   - Enhancements → Structured Data

**Search Console query monitoring** — track weekly impressions and average position for:
- `diş implantı Bakı`
- `rəqəmsal implant`
- `implant planlaşdırması Bakı`
- `rehberli cərrahiyyə`
- `3Shape Implant Studio`
- `зубные импланты Баку` (Russian)
- `digital implant baku` (English)

### 9.3 Core Web Vitals Benchmarks

Run `npm run seo:cwv` (or PageSpeed Insights) monthly and after each major deploy. Target thresholds:

| Metric | Current target | Green threshold |
|--------|---------------|----------------|
| LCP | < 2.5s | < 2.5s |
| INP | < 200ms | < 200ms |
| CLS | < 0.1 | < 0.1 |

**Mobile performance is weighted more heavily than desktop** in Google's Core Web Vitals assessment. Test on mobile first.

### 9.4 Monthly Reporting Template

SEO monthly report must include:
1. Top 10 queries by impressions (GSC) — month-over-month change
2. Top 5 queries by clicks — with CTR
3. Organic session count by language segment (GA4)
4. New/lost backlinks (from backlink monitoring tool)
5. Core Web Vitals status (all URLs green/amber/red)
6. Any new content published (blog posts, page updates)
7. Competitor rank spot-checks (manual, 3 head terms)
8. Action items for next month

---

## Appendix A: Immediate Action Items

Priority tasks derived from this SEO Bible, ordered by impact:

1. **HIGH** — Add `x-default` to hreflang alternates in `lib/i18n.ts` and `[lang]/layout.tsx` → file for Frontend/UI Manager
2. **HIGH** — Change middleware redirect to 301 (permanent) instead of temporary → file for Frontend/UI Manager  
3. **HIGH** — Implement `BreadcrumbList` schema on all service pages (function exists, needs calling) → file for Frontend/UI Manager
4. **HIGH** — Add `Physician` schema for Dr. Aliyev on About page → file for Frontend/UI Manager
5. **MEDIUM** — Update sitemap priorities: appointment page → 0.8; home → 1.0 (already correct); differentiate gallery/workflow → 0.6
6. **MEDIUM** — Add structured `aggregateRating` to Dentist schema once 5+ reviews collected
7. **MEDIUM** — Create Google Business Profile listing matching NAP in schema.ts exactly
8. **MEDIUM** — Publish 2 more blog articles targeting high-gap keywords: digital vs traditional comparison, cost/FAQ expansion
9. **LOW** — Set up Yandex Business listing for Russian-speaking audience
10. **LOW** — Audit all images for alt text completeness → file for Image Manager

---

*Document maintained by SEO Manager. Review quarterly or after any major site restructure. All implementation tasks requiring code changes must be filed for Frontend/UI Manager.*
