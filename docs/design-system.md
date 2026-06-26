# Design System — Digitalimplant.az

> **Version:** 1.0 · **Date:** 2026-06-26  
> **Stack:** Next.js 16, Tailwind v4 (`@theme`), TypeScript, Lucide React  
> **Locales:** az, en, ru  
> **Canonical site:** https://digitalimplant.az

This document is the authoritative UI/UX reference for Digitalimplant.az — a premium digital implantology clinic in Baku, Azerbaijan. All design and frontend decisions must align with this system.

---

## 1. Brand Colors

The palette is a **deep-space dark theme** built for trust, precision, and a premium medical technology feel. Deep navy backgrounds convey clinical depth; pure blues and cyans evoke innovation and high-tech dental care.

### 1.1 CSS Custom Properties (`@theme`)

All colors are declared as Tailwind v4 theme tokens in `app/globals.css`:

```css
/* Background darks — layered depth */
--color-dark:      #050E1F   /* body bg layer 1 */
--color-dark-2:    #071628   /* footer, elevated surfaces */
--color-dark-3:    #0A1F3D   /* cards/panels */
--color-dark-4:    #0D2754   /* high-contrast borders */

/* Primary blue — CTAs, links, focus rings */
--color-blue:       #0057FF
--color-blue-light: #3478FF  /* hover state */
--color-blue-pale:  #6BA3FF  /* disabled / decorative */

/* Accent cyan — highlights, icons, active states */
--color-sky:        #00B4FF
--color-cyan:       #00E5FF
--color-cyan-dark:  #00B8CC  /* gradient terminus */

/* Text & content */
--color-white:     #FFFFFF
--color-off-white: #F0F6FF   /* page-section headings */
--color-muted:     #8BADD4   /* body text, secondary labels */
--color-subtle:    #4A6A8A   /* placeholder, disabled */

/* Surface & structural */
--color-surface:   rgba(7,22,40,0.75)    /* glass overlay base */
--color-glass:     rgba(255,255,255,0.04) /* glass card fill */
--color-border:    rgba(0,114,255,0.18)   /* blue-tinted border */
--color-border-2:  rgba(255,255,255,0.08) /* neutral border */
```

**Actual body background (not in @theme):** `#020B18` — set directly on `body`.

### 1.2 Semantic Colors

| Token | Hex / Value | Usage |
|-------|-------------|-------|
| Primary | `#0057FF` | CTA buttons, active links, focus ring |
| Primary Hover | `#3478FF` | Button hover, nav active highlight |
| Accent | `#00E5FF` | Gradient terminus, icon highlights, badges |
| Accent Secondary | `#00B4FF` | Sky-level highlights, nav active text |
| Success | `#22C55E` | Form validation success (define as `--color-success`) |
| Error / Danger | `#EF4444` | Form errors, destructive actions (define as `--color-error`) |
| Warning | `#F59E0B` | Alerts, important notices (define as `--color-warning`) |
| Background | `#020B18` | Page root background |
| Surface | `#071628` | Footer, secondary sections |
| Elevated | `#0A1F3D` | Modals, cards, dropdowns |

### 1.3 Gradient Patterns

```css
/* Primary text gradient — headings, hero callouts */
background: linear-gradient(135deg, #00AEFF 0%, #00E5FF 100%);

/* White-to-blue text gradient — mixed headlines */
background: linear-gradient(135deg, #ffffff 0%, rgba(0,174,255,0.8) 100%);

/* Blue-to-cyan decorative line (SectionLabel) */
background: linear-gradient(to right, #0057FF, #00E5FF);
```

### 1.4 Color Usage Rules

- **Never use pure white `#FFFFFF` for body text** — use `--color-muted` (`#8BADD4`) for paragraphs
- **Heading text** uses `--color-white` (`#FFFFFF`) or `--color-off-white` (`#F0F6FF`)
- **Interactive text** (links, active nav) uses `--color-sky` (`#00B4FF`) on hover
- **Never place `--color-blue` text on `--color-dark`** without checking contrast — see §8

---

## 2. Typography

### 2.1 Font Families

```css
/* In app layout — loaded via next/font */
--font-display: Space Grotesk (variable)   /* headings, labels, CTAs */
--font-sans:    Inter (variable)            /* body text, paragraphs */
```

**Font classes:**
- `.font-display` → `font-family: var(--font-space-grotesk), system-ui, sans-serif`
- Default body → Inter via Tailwind `font-sans`

### 2.2 Type Scale

| Role | Size | Weight | Line-height | Tracking | Class Pattern |
|------|------|--------|-------------|----------|---------------|
| Display XL | `4rem–6rem` (responsive) | 700–800 | 1.0–1.1 | `-0.02em` | `text-6xl font-display font-bold` |
| Display L | `3rem–4rem` | 700 | 1.1 | `-0.015em` | `text-5xl font-display font-bold` |
| Heading H1 | `2rem–3rem` | 700 | 1.2 | `-0.01em` | `text-4xl font-display font-bold` |
| Heading H2 | `1.5rem–2rem` | 700 | 1.3 | `-0.005em` | `text-3xl font-display font-bold` |
| Heading H3 | `1.25rem` | 600 | 1.4 | `0` | `text-xl font-display font-semibold` |
| Body L | `1rem` | 400 | 1.7 | `0` | `text-base` |
| Body M | `0.875rem` | 400 | 1.6 | `0` | `text-sm` |
| Body S | `0.75rem` | 400 | 1.5 | `0` | `text-xs` |
| Caption | `0.6875rem` | 500 | 1.4 | `0.02em` | `text-[11px] font-medium` |
| Label / Tag | `0.625rem` | 600–700 | 1.0 | `0.35em–0.5em` | `text-[10px] font-display font-semibold tracking-[0.35em] uppercase` |
| Overline | `0.5625rem` | 600 | 1.0 | `0.4em` | `text-[9px] font-display font-semibold tracking-[0.4em] uppercase` |

### 2.3 Typography Rules

- **Display/Heading:** Always `font-display` (Space Grotesk)
- **Body/Paragraph:** `font-sans` (Inter), `text-muted` (`#8BADD4`) color
- **Labels, Badges, Overlines:** `font-display`, `uppercase`, wide `tracking-[0.35em+]`
- **CTAs/Buttons:** `font-display font-semibold tracking-wide`
- **Navigation links:** `text-xs font-medium tracking-wide`
- **Min body font size:** 14px (`text-sm`) — never smaller for paragraph content
- **Text gradient headings:** Apply `.text-gradient` class; never on body text

---

## 3. Spacing System

Tailwind v4 uses a 4px base unit (rem-based). Key spacing values used across the codebase:

### 3.1 Spacing Scale Reference

| Token | px | rem | Use |
|-------|----|-----|-----|
| `1` | 4px | 0.25rem | Icon gap, micro padding |
| `1.5` | 6px | 0.375rem | Gap between badge icon + text |
| `2` | 8px | 0.5rem | Button internal gap |
| `3` | 12px | 0.75rem | Button padding-y (sm), nav link padding |
| `4` | 16px | 1rem | Button padding-x (sm) |
| `5` | 20px | 1.25rem | Container padding (mobile) |
| `6` | 24px | 1.5rem | Button padding-x (md), section sub-spacing |
| `7` | 28px | 1.75rem | Card internal padding |
| `8` | 32px | 2rem | Button padding-x (lg) |
| `10` | 40px | 2.5rem | Container padding (lg/desktop), footer column gap |
| `16` | 64px | 4rem | Section padding top (footer) |

### 3.2 Conventions

- **Section vertical padding:** `py-16` to `py-32` (64px–128px)
- **Card internal padding:** `p-7` (28px)
- **Container horizontal padding:** `px-5 lg:px-10` (20px mobile, 40px desktop)
- **Component gap:** `gap-2` to `gap-6` between sibling elements
- **Header height:** `h-16` (64px)

---

## 4. Layout Grid

### 4.1 Container Sizes

Defined in `components/ui/Container.tsx`:

| Size | Max-width | Class | Use |
|------|-----------|-------|-----|
| `sm` | `48rem` (768px) | `max-w-3xl` | Blog posts, narrow content |
| `md` | `64rem` (1024px) | `max-w-5xl` | Articles, forms |
| `lg` | `72rem` (1152px) | `max-w-6xl` | Default content |
| `xl` | `80rem` (1280px) | `max-w-7xl` | Full-width sections, header/footer |

All containers use `mx-auto px-5 lg:px-10`.

### 4.2 Breakpoints (Tailwind v4 defaults)

| Name | Min-width | Use |
|------|-----------|-----|
| `sm` | 640px | Show/hide: lang switcher, CTA button in header |
| `md` | 768px | Two-column layouts begin |
| `lg` | 1024px | Desktop nav shows; container padding increases |
| `xl` | 1280px | Max content width reached |
| `2xl` | 1536px | Not actively used — content capped at xl |

### 4.3 Grid Patterns

```html
<!-- Standard 4-column footer grid -->
<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

<!-- Services / features 3-column -->
<div class="grid md:grid-cols-3 gap-6">

<!-- Hero: text left, image right -->
<div class="grid lg:grid-cols-2 gap-12 items-center">
```

### 4.4 Responsive Rules

- **Mobile-first:** all base styles are mobile; breakpoints add enhancement
- **Nav:** hamburger menu `< lg`, horizontal nav `>= lg`
- **Footer:** stacked on mobile, 4-column on lg
- **Cards:** full-width on mobile, grid on sm+

---

## 5. Component Library

### 5.1 Button

**File:** `components/ui/Button.tsx`

```typescript
type ButtonProps = {
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  href?: string        // renders as <Link> when present
  disabled?: boolean
}
```

| Variant | Background | Text | Border | Glow |
|---------|-----------|------|--------|------|
| `primary` | `#0057FF` → `#3478FF` hover | white | none | `0 0 24px rgba(0,87,255,0.4)` |
| `outline` | transparent | white → sky hover | `white/20` → `sky` hover | none |
| `ghost` | transparent | muted → white hover | none | none |

| Size | Padding | Font size | Gap |
|------|---------|-----------|-----|
| `sm` | `px-4 py-2` | `text-xs` | `gap-1.5` |
| `md` | `px-6 py-3` | `text-sm` | `gap-2` |
| `lg` | `px-8 py-4` | `text-sm` | `gap-2` |

**Rules:**
- All buttons use `font-display font-semibold tracking-wide`
- Focus state: `focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-dark`
- Transition: `transition-all duration-200`
- **Danger variant** (not yet implemented): `bg-[#EF4444] hover:bg-[#DC2626] text-white`

### 5.2 Card

**File:** `components/ui/Card.tsx`

```typescript
type CardProps = {
  glow?: boolean   // adds blue glow on hover
}
```

All cards use the `.glass` utility:
```css
.glass {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

**With glow:** `hover:border-blue/30 hover:shadow-[0_0_40px_rgba(0,87,255,0.12)]`  
**Transition:** `transition-all duration-300`  
**Padding:** `p-7` (28px)

### 5.3 Badge

**File:** `components/ui/Badge.tsx`

| Variant | Background | Text | Border |
|---------|-----------|------|--------|
| `blue` | `#0057FF` at 10% | `#00B4FF` | `#0057FF` at 20% |
| `cyan` | `#00E5FF` at 10% | `#00E5FF` | `#00E5FF` at 20% |
| `muted` | `white` at 5% | `#8BADD4` | `white` at 10% |

**Typography:** `text-[10px] font-display font-semibold tracking-[0.35em] uppercase`  
**Padding:** `px-2.5 py-1`

### 5.4 Container

**File:** `components/ui/Container.tsx`

```tsx
<Container size="xl">…</Container>  {/* default */}
<Container size="sm">…</Container>  {/* narrow article */}
```

### 5.5 SectionLabel

**File:** `components/ui/SectionLabel.tsx`

Decorative section opener: a `4rem` gradient line + uppercase overline text.

```tsx
<SectionLabel>Xidmətlərimiz</SectionLabel>
```

Output: `[━━━━] XIDMƏTLƏRIMIZ` (blue-to-cyan line, sky-colored text)

**Typography:** `text-[10px] font-display font-semibold tracking-[0.5em] uppercase text-sky`

### 5.6 Breadcrumb

**File:** `components/ui/Breadcrumb.tsx`

```tsx
<Breadcrumb items={[
  { label: "Ana səhifə", href: "/az" },
  { label: "Blog", href: "/az/blog" },
  { label: "Current article" }  // no href = current page
]} />
```

- ARIA: `aria-label="Breadcrumb"` on `<nav>`
- Separator: `<ChevronRight size={10} />` from Lucide
- Colors: `text-muted` default, `hover:text-sky` for links, `text-off-white` for current

### 5.7 Navigation — Header

**File:** `components/layout/Header.tsx`

- Fixed position, full-width, `z-50`
- Transparent → `bg-dark/90 backdrop-blur-xl` on scroll > 20px
- Height: `h-16` (64px)
- Logo: SVG hexagon icon + "DIGITAL IMPLANT" / "Rəqəmsal İmplantologiya" tagline
- Desktop nav links: `text-xs font-medium tracking-wide`, active = `text-sky`
- CTA button: blue primary, visible `>= sm`
- Language switcher: az/en/ru, visible `>= sm`
- Mobile: hamburger `Menu`/`X` icon, full-width dropdown menu
- Mobile CTA: full-width blue button in dropdown
- Close mobile menu on route change

### 5.8 Navigation — Footer

**File:** `components/layout/Footer.tsx`

- Background: `bg-dark-2` (`#071628`)
- Top border: `border-white/5`
- Grid: `sm:grid-cols-2 lg:grid-cols-4`
- Columns: Brand + description, Services, Pages, Contact
- Contact icons: Lucide `Phone`, `Mail`, `MapPin`, `Clock` in `text-sky`
- Link hover: `text-muted → text-sky`
- Copyright bar: `text-[10px] text-white/25`

### 5.9 Sticky Mobile CTA

**File:** `components/layout/StickyMobileCTA.tsx`

- Fixed bottom bar, visible only on mobile (`lg:hidden`)
- Full-width appointment button
- Hides when appointment page is active

### 5.10 WhatsApp Button

**File:** `components/layout/WhatsAppButton.tsx`

- Fixed bottom-right floating button
- WhatsApp green brand color
- Opens `https://wa.me/994105010107`

### 5.11 Modal / Dialog

*Not yet implemented. Specification:*

```html
<!-- Structure -->
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="glass p-8 max-w-lg w-full mx-5">
    <h2 id="modal-title" class="font-display font-bold text-xl text-white">…</h2>
    …
    <button aria-label="Close">×</button>
  </div>
</div>

<!-- Backdrop -->
<div class="fixed inset-0 bg-dark/80 backdrop-blur-sm z-40" />
```

**Focus trap required.** Close on `Escape` key and backdrop click.

### 5.12 Toast / Alert

*Not yet implemented. Specification:*

| Type | Border color | Icon |
|------|-------------|------|
| Success | `#22C55E` | `CheckCircle` |
| Error | `#EF4444` | `XCircle` |
| Warning | `#F59E0B` | `AlertTriangle` |
| Info | `#00B4FF` | `Info` |

Structure: `.glass` card, left accent border, icon + message text, optional dismiss `×`.  
Position: top-right, `z-50`, stacked with gap.  
Animation: slide in from right, fade out.

### 5.13 Form Inputs

*Specification for appointment form and contact form:*

```css
/* Base input */
.input {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  color: #FFFFFF;
  padding: 12px 16px;
  font-family: Inter;
  font-size: 14px;
  transition: border-color 200ms;
}

.input:focus {
  outline: none;
  border-color: rgba(0,87,255,0.5);
  box-shadow: 0 0 0 3px rgba(0,87,255,0.15);
}

.input::placeholder {
  color: #4A6A8A;  /* --color-subtle */
}

.input:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Error state */
.input--error {
  border-color: rgba(239,68,68,0.5);
}

.input--error:focus {
  border-color: rgba(239,68,68,0.7);
  box-shadow: 0 0 0 3px rgba(239,68,68,0.15);
}
```

**Label:** `text-[11px] font-display font-semibold tracking-wide uppercase text-muted mb-2`  
**Error message:** `text-[11px] text-[#EF4444] mt-1`  
**Select:** same as text input; custom chevron icon  
**Textarea:** same as text input; `min-height: 120px; resize: vertical`  
**Checkbox/Radio:** Custom styled; accent color `#0057FF`

### 5.14 Loading States

*Specification:*

```tsx
/* Skeleton: pulse animation */
<div class="animate-pulse bg-white/5 rounded" style="height: 1rem; width: 60%" />

/* Spinner: rotate */
<div class="border-2 border-white/10 border-t-blue rounded-full w-5 h-5 animate-spin" />

/* Page loading (app/[lang]/loading.tsx) */
/* Uses full-page centered spinner on dark background */
```

---

## 6. Icons & Imagery

### 6.1 Icon Library

**Library:** Lucide React (`lucide-react` ^1.21.0)

**Standard icon sizes:**
- `size={10}` — Breadcrumb separator
- `size={13}` — Footer contact icons, small inline indicators
- `size={16}` — Default body icon
- `size={20}` — Navigation toggle (mobile menu)
- `size={24}` — Feature icons, section callouts
- `size={32}` — Large feature tiles

**Icon color:** `text-sky` for accents, `text-muted` for secondary, `text-white` for primary

**Key icons in use:** `Menu`, `X`, `ChevronRight`, `Phone`, `Mail`, `MapPin`, `Clock`

**Logo:** Custom SVG hexagon — do not replace with icon library

### 6.2 Image Conventions

| Context | Aspect Ratio | Format | Notes |
|---------|-------------|--------|-------|
| Doctor portrait | 3:4 | WebP | Neutral background, professional lighting |
| Procedure gallery | 16:9 | WebP | Clinical but not graphic; before/after pairs |
| Equipment | 4:3 | WebP | Studio white or dark background |
| Hero background | 16:9 | WebP | Abstract / architectural; never graphic |
| Logo / partner brand | varies | SVG or WebP | Transparent background |
| Blog thumbnail | 16:9 | WebP | Clean, informative |
| OG image | 1200×630 | PNG | Brand colors, logo, page title |

### 6.3 Medical Photography Guidelines

- **Never show graphic surgical content** in public-facing pages; use diagrams or 3D renders
- **Patient photos:** consent required; prefer stock or generated imagery
- **Doctor imagery:** professional clinical attire, DSLR quality, consistent lighting
- **Equipment:** clean, modern context — conveys precision and technology
- **Color grading:** align with brand — cool blues/whites, avoid warm-heavy or yellow-heavy grading
- **3Shape renders:** export at `2x` minimum; use WebP with quality 85+

---

## 7. Motion & Animation

### 7.1 Transition Timing

| Usage | Duration | Easing |
|-------|----------|--------|
| Button hover | `200ms` | `ease` (Tailwind default) |
| Card hover | `300ms` | `ease` |
| Header scroll state | `300ms` | `ease` |
| Nav link color | `150ms` | `ease` |
| Mobile menu open | `200ms` | `ease-out` |
| Modal open | `250ms` | `cubic-bezier(0.16, 1, 0.3, 1)` (spring) |
| Toast enter | `300ms` | `ease-out` |
| Toast exit | `200ms` | `ease-in` |

### 7.2 Easing Curves

```css
--ease-out-expo:   cubic-bezier(0.16, 1, 0.3, 1);    /* snappy entrances */
--ease-in-expo:    cubic-bezier(0.7, 0, 0.84, 0);     /* clean exits */
--ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1); /* modals, popups */
```

### 7.3 Animation Principles

**Medical context constraints:**
- No fast flashing or strobing — accessibility + clinical professionalism
- No playful bounces or cartoonish effects
- Motion should convey **precision and calm confidence**
- Scroll-triggered animations: subtle fade-in + slight translateY (e.g. `0 → opacity 1`, `10px → 0`)
- Parallax: avoid — causes vestibular issues and adds complexity

**Approved patterns:**
- Glow pulses on hero CTAs (`box-shadow` transition)
- Backdrop blur on header scroll
- Fade-in-up for section content
- Subtle scale on card hover (max `scale-[1.01]`)

**Avoid:**
- Rotating/spinning decorative elements
- Auto-playing video with motion
- Transitions > 500ms on user-triggered actions

---

## 8. Accessibility

### 8.1 WCAG 2.1 AA Targets

| Requirement | Standard | Current Implementation |
|-------------|----------|----------------------|
| Text contrast | ≥ 4.5:1 | `#8BADD4` on `#020B18` = **6.1:1** ✓ |
| Large text contrast | ≥ 3:1 | `#FFFFFF` on `#020B18` = **21:1** ✓ |
| CTA text contrast | ≥ 4.5:1 | `#FFFFFF` on `#0057FF` = **5.9:1** ✓ |
| Sky on dark | ≥ 4.5:1 | `#00B4FF` on `#020B18` = **7.8:1** ✓ |
| Focus visible | Required | `focus-visible:ring-2 focus-visible:ring-blue` ✓ |
| Interactive targets | ≥ 44×44px | Buttons use `py-3 px-6` (min 48px height) ✓ |
| Images alt text | Required | Implement on all `<Image>` components |
| Language attribute | Required | Set `lang={lang}` on `<html>` in root layout |

### 8.2 Color Contrast Pairs — Known Issues

| Foreground | Background | Ratio | Status |
|-----------|-----------|-------|--------|
| `#4A6A8A` (subtle) | `#020B18` | ~3.2:1 | ⚠ Fails AA for normal text — use only for placeholders |
| `#0057FF` (blue) | `#020B18` | ~3.8:1 | ⚠ Fails AA for normal text — use only for large headings or icons |
| `text-white/25` | `#020B18` | ~1.5:1 | ⚠ Decorative only (copyright line) |

### 8.3 Focus States

```css
/* All interactive elements must have a visible focus ring */
focus-visible:ring-2
focus-visible:ring-blue            /* #0057FF */
focus-visible:ring-offset-2
focus-visible:ring-offset-dark     /* #050E1F offset so ring visible */
```

**Never use `outline: none` without a replacement focus indicator.**

### 8.4 ARIA Patterns

```html
<!-- Header mobile toggle -->
<button aria-label="Menyu" aria-expanded={open} aria-controls="mobile-menu">

<!-- Mobile nav -->
<nav id="mobile-menu" aria-label="Mobil naviqasiya">

<!-- Breadcrumb -->
<nav aria-label="Breadcrumb">

<!-- Cards (if interactive) -->
<article aria-label="Service card title">

<!-- Icons (decorative) -->
<svg aria-hidden="true">

<!-- Icons (meaningful) -->
<svg aria-label="Phone number" role="img">

<!-- Form fields -->
<label for="name">Ad</label>
<input id="name" type="text" aria-required="true" aria-describedby="name-error">
<span id="name-error" role="alert">Ad tələb olunur</span>
```

### 8.5 Keyboard Navigation

- All interactive elements reachable via `Tab`
- Logical tab order matches visual order
- Mobile menu: trap focus within menu when open; close on `Escape`
- Modal: trap focus; return focus to trigger on close
- Skip-to-content link: add `<a href="#main-content" class="sr-only focus:not-sr-only">Ana məzmuna keç</a>` before header

### 8.6 Screen Reader Considerations

- Decorative SVGs: `aria-hidden="true"`
- Language switcher: `aria-label="Dil seçin"` or locale equivalent
- Section labels with gradient text: ensure readable contrast for high-contrast mode
- Loading states: `aria-live="polite"` or `aria-busy="true"` on updating regions

---

## 9. Tailwind v4 Conventions

### 9.1 Architecture

This project uses **Tailwind v4** with the `@import "tailwindcss"` import model. All brand tokens are declared in the `@theme {}` block in `app/globals.css`.

```css
/* app/globals.css structure */
@import "tailwindcss";

@theme {
  --color-*: ...;
  --font-*: ...;
}

/* Global base styles */
* { box-sizing: border-box; }

/* Utility classes (glass, glow, bg-grid, text-gradient) */
.glass { ... }
.glow-blue { ... }
```

### 9.2 Custom Utility Classes

| Class | Definition | Use |
|-------|-----------|-----|
| `.glass` | Glass morphism: `bg-white/4 backdrop-blur-xl border border-white/8` | Cards, header scroll state, panels |
| `.glow-blue` | `box-shadow: 0 0 80px rgba(0,87,255,0.3), 0 0 160px rgba(0,87,255,0.1)` | Hero section glow elements |
| `.glow-sm` | `box-shadow: 0 0 30px rgba(0,87,255,0.2)` | Subtle card/CTA glow |
| `.bg-grid` | Blue-tinted 48px grid background | Hero sections, abstract backgrounds |
| `.text-gradient` | Blue-to-cyan gradient text | Primary headline accent |
| `.text-gradient-white` | White-to-sky gradient text | Secondary headline accent |
| `.font-display` | Space Grotesk | Headings, labels |

### 9.3 Token Usage in Components

```tsx
// ✅ Correct — use @theme tokens
className="text-blue hover:text-blue-light bg-dark-2 border-border"

// ✅ Correct — Tailwind opacity modifier on token
className="bg-blue/10 border-white/20"

// ❌ Wrong — hardcode hex in className
className="text-[#0057FF]"  // only for one-off values not in @theme
```

### 9.4 File Organization

```
app/
  globals.css           ← @theme tokens, base styles, global utilities
  layout.tsx            ← Root layout, font imports
  [lang]/
    layout.tsx          ← Per-page layout (Header/Footer/WhatsApp)
    page.tsx            ← Home page

components/
  ui/                   ← Primitive, reusable components
    Button.tsx
    Card.tsx
    Badge.tsx
    Container.tsx
    SectionLabel.tsx
    Breadcrumb.tsx
  layout/               ← Site-level structural components
    Header.tsx
    Footer.tsx
    StickyMobileCTA.tsx
    WhatsAppButton.tsx
  home/                 ← Page-specific section components
  blog/
  faq/
```

### 9.5 Naming Conventions

**Component files:** `PascalCase.tsx`  
**Page files:** `page.tsx` (Next.js App Router convention)  
**Layout files:** `layout.tsx`  
**Utility functions:** `camelCase.ts`

**Within component JSX:**

```tsx
// Props interface name matches component
interface ButtonProps { … }
export default function Button(…) { … }

// Variants as plain object, not Map
const variants = {
  primary: "bg-blue …",
  outline: "border …",
}

// clsx for conditional classes
import { clsx } from "clsx";
const cls = clsx(base, variants[variant], sizes[size], className);
```

### 9.6 Adding New @theme Tokens

When adding a new design token:

1. Add to `app/globals.css` `@theme {}` block
2. Follow existing naming: `--color-{name}`, `--font-{name}`
3. Document in this design system under the appropriate section
4. Prefer semantic names for new tokens (e.g. `--color-success`) over color names

---

## 10. Dark / Light Mode Strategy

### 10.1 Current State

Digitalimplant.az is **dark-mode only** by design. The brand identity is built on the deep-space dark palette. Light mode is not in scope for v1.

### 10.2 Future Light Mode Implementation Plan

When/if light mode is required (e.g. print styles or accessibility preference):

**Step 1 — Semantic token layer**

Introduce semantic aliases on top of palette tokens:

```css
@theme {
  /* Semantic — use these in components, not raw palette */
  --color-bg-base:       var(--color-body);      /* page background */
  --color-bg-surface:    var(--color-dark-2);    /* card/panel */
  --color-bg-elevated:   var(--color-dark-3);    /* modal/overlay */
  --color-text-primary:  var(--color-white);     /* headings */
  --color-text-body:     var(--color-muted);     /* body copy */
  --color-text-subtle:   var(--color-subtle);    /* placeholders */
  --color-interactive:   var(--color-blue);      /* links, CTAs */
  --color-border-base:   var(--color-border-2);  /* borders */
}
```

**Step 2 — Light mode overrides via `.light` class or `@media (prefers-color-scheme: light)`**

```css
@media (prefers-color-scheme: light) {
  :root {
    --color-bg-base:       #F8FAFF;
    --color-bg-surface:    #FFFFFF;
    --color-bg-elevated:   #F0F4FF;
    --color-text-primary:  #050E1F;
    --color-text-body:     #2A3A5C;
    --color-border-base:   rgba(0, 87, 255, 0.15);
  }
}
```

**Step 3 — Update `.glass`, glow utilities, and gradient text** for light-mode compatible equivalents.

**Step 4 — User preference toggle** stored in `localStorage`, applied via root `data-theme` attribute.

### 10.3 Print Styles

For clinical use cases (printing treatment plans, appointment confirmations):

```css
@media print {
  body { background: white; color: black; }
  .glass { background: white; border: 1px solid #e0e0e0; backdrop-filter: none; }
  .glow-blue, .glow-sm { box-shadow: none; }
  header, footer, .sticky-cta, .whatsapp-btn { display: none; }
}
```

---

## Appendix A — Quick Reference Card

```
COLORS
  Background:  #020B18
  Surface:     #071628
  Primary CTA: #0057FF → #3478FF (hover)
  Accent:      #00E5FF / #00B4FF
  Body text:   #8BADD4
  Heading:     #FFFFFF

FONTS
  Display:  Space Grotesk (headings, labels, CTAs)
  Body:     Inter (paragraphs, body text)

SPACING BASE: 4px (Tailwind rem scale)

BREAKPOINTS
  sm: 640px · md: 768px · lg: 1024px · xl: 1280px

CONTAINER MAX-WIDTHS
  sm: 768px · md: 1024px · lg: 1152px · xl: 1280px

ICON LIBRARY: Lucide React

TRANSITIONS: 200ms (buttons), 300ms (cards/header)

WCAG 2.1 AA: Targeted throughout
```

---

## Appendix B — Component Checklist for New Features

Before shipping any new UI component:

- [ ] Follows spacing system (4px grid)
- [ ] Uses `@theme` color tokens — no hardcoded hex except for one-offs
- [ ] Uses `font-display` for headings/labels, `font-sans` for body
- [ ] Has `focus-visible` ring for keyboard accessibility
- [ ] Tested at mobile (375px), tablet (768px), and desktop (1280px)
- [ ] `aria-label` or semantic HTML for screen readers
- [ ] Images have `alt` text
- [ ] Transitions ≤ 300ms, easing appropriate for medical context
- [ ] Added to this design system document if reusable
