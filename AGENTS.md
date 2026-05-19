# Rohit Contracting Website — Full Project Context

## 📋 Overview

A premium construction & building materials company website for **Rohit Contracting**, a UAE-based contracting firm. Built as a modern, light-mode single-page website with smooth animations and a luxury corporate aesthetic. Dark mode is preserved via a `.dark` class selector for potential future theme toggling.

**Live site:** Local dev server at `http://localhost:3000`

---

## 🛠 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 16.2.6 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS | ^4 (v4) |
| Animations | Framer Motion | ^12.38.0 |
| Icons | Lucide React | ^1.14.0 |
| PostCSS | @tailwindcss/postcss | ^4 |
| Node | 24.11.0 | |
| npm | 11.6.1 | |

---

## 🏗 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout: fonts, metadata, ErrorBoundary, script fallback
│   │   ├── page.tsx          # Home page: client component, dynamic imports for all sections
│   │   └── globals.css       # Tailwind v4 theme, custom CSS, animations, utilities
│   └── components/
│       ├── Navbar.tsx         # Sticky transparent navbar with scroll awareness
│       ├── LoadingScreen.tsx  # SSR-safe loading overlay (no framer-motion)
│       ├── ScrollProgress.tsx # Fixed scroll progress bar
│       ├── WhatsAppButton.tsx # Floating WhatsApp chat button
│       ├── ErrorBoundary.tsx  # React error boundary class component
│       ├── AnimatedCounter.tsx # Number counter that animates on scroll
│       ├── HeroSection.tsx    # Fullscreen cinematic hero with animated stats
│       ├── AboutSection.tsx   # Split layout, values grid, milestone timeline
│       ├── ServicesSection.tsx # 8 premium service cards with stagger animation
│       ├── ProjectsSection.tsx # Masonry gallery with filter tabs and modal
│       ├── WhyChooseUs.tsx    # Dark section with animated counters + 8 reasons
│       ├── MaterialsSection.tsx # 8 building material cards with quality badges
│       ├── CTASection.tsx     # Bold conversion section
│       ├── ContactSection.tsx # 5-column layout: info cards + form + WhatsApp CTA
│       └── Footer.tsx         # 6-column footer with social, links, scroll-to-top
├── package.json
├── tailwind.config.ts         # No longer used — Tailwind v4 uses CSS config
├── postcss.config.mjs
├── next.config.ts
└── tsconfig.json
```

---

## 🚨 CRITICAL — Light Mode Conversion & Hydration Fix (Session 2)

### The Problem
After the initial dark-themed implementation, converting to light mode required:
1. Removing `className="dark"` from `<html>` in `layout.tsx` (caused hydration mismatch errors)
2. Replacing all hardcoded `text-white`, `bg-primary`, `border-white/` colors with theme CSS variables
3. Updating theme.css with proper light mode color values

### Changes Applied

**`src/styles/theme.css`** — Added light mode color palette:
- Default `:root` block now defines warm light mode colors (off-white bg, dark text)
- `.dark` class block preserves original dark mode values with brand orange accent
- Accent color: `oklch(0.68 0.19 45)` — consistent brand orange across both modes
- Stray duplicate declarations (from earlier refactoring) removed to fix CSS parse error

**`src/app/layout.tsx`** — Fixed hydration:
- Removed `className="dark"` from `<html>`
- Added `suppressHydrationWarning` to `<html>`
- Changed `<body>` classes from `bg-primary text-white` to `bg-background text-foreground`

**All 16 components** — Replaced hardcoded colors with theme variables:
- `text-white` → `text-foreground` (or `text-accent-foreground` for buttons on accent bg)
- `bg-primary` → `bg-background` (or `bg-dark-surface` for alternating sections)
- `border-white/5` → `border-border`
- `placeholder-white/30` → `placeholder-foreground/30`
- `text-white/80/60/50/40/30/20/10` → `text-foreground/80/60/50/40/30/20/10`
- `bg-white/5` → `bg-foreground/5`

**`src/components/WhatsAppButton.tsx`** — Tooltip text colors changed to be visible on light glass background.

---

## 🚨 CRITICAL — Blank Page Bug Fix (Session 1)

### The Problem
After the loading screen dismisses, the entire page appeared blank/black except the footer.

### Root Cause
Every section component uses Framer Motion's `initial={{ opacity: 0, y: 20 }}` which renders as inline `style="opacity:0; transform:translateY(20px)"` in the SSR HTML. If anything goes wrong during React hydration (a runtime error in any of the 14 client components, or a hydration mismatch), Framer Motion never animates elements to visible, leaving them permanently invisible.

### The Fix (Applied)
`src/app/page.tsx` was changed to:
1. Add `"use client"` directive
2. Use `next/dynamic` with `ssr: false` for ALL 13 section components
3. Only `LoadingScreen` remains as a static import (no Framer Motion used)

This ensures:
- SSR output contains only the LoadingScreen (visible immediately)
- All Framer Motion components mount ON THE CLIENT after JS loads
- Framer Motion initializes cleanly with no SSR-related issues

```tsx
// Pattern used for every section component:
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });
```

### Safety Nets
1. **ErrorBoundary** (`layout.tsx`): Wraps all content, catches render errors, shows fallback UI
2. **Script fallback** (`layout.tsx`): Inline `<script>` in `<body>` force-hides the loading screen after 6 seconds if React hydration fails completely
3. **LoadingScreen timeout**: 1.5 seconds, then returns `null` to dismiss

---

## ⚠️ Known Issues / Gotchas

### 1. SEO Impact
With `ssr: false` on all sections, search engine crawlers see only the loading screen div. The page metadata (title, description, keywords) in `layout.tsx` still helps indexing, but section content/headings are invisible to crawlers. If SEO is critical, consider:
- Adding a `<noscript>` block with business info in `layout.tsx`
- Keeping at least one section server-side rendered
- Adding JSON-LD structured data

### 2. Dynamic Import Loading Fallbacks
None of the `dynamic()` calls have explicit `loading` fallbacks. If a chunk fails to load on a very slow network, React renders nothing for that component. Adding `{ loading: () => null }` is good practice but not critical for local/served deployment.

### 3. Loading Screen Timing
Fixed at 1.5s. For local dev this is fine. For production with slow connections, consider making dismissal event-driven (e.g., track when all dynamic imports resolve).

### 4. Framer Motion + SSR Pattern
**Never SSR render Framer Motion components.** Always use one of these approaches:
- `dynamic(() => import(...), { ssr: false })`
- Or render motion elements only after a `useEffect` sets a `mounted` flag

### 5. `useInView` from Framer Motion
Used in `AnimatedCounter.tsx` — this hook is available in Framer Motion v12.x. Works correctly when rendered client-side.

### 6. Lucide React Icon Availability
Some unusual icons used in the code (`Container`, `Cable`, `SquareStack`, `ShieldCheck`, `HeartHandshake`) — these exist in lucide-react ^1.14.0 but verify if upgrading lucide-react. The icons compile and bundle correctly currently.

### 7. Tailwind v4 Specifics
- No `tailwind.config.ts` needed — Tailwind v4 uses CSS-based configuration
- All theme colors defined via `@theme inline {}` in `globals.css`
- Custom utilities like `.glass`, `.glass-accent`, `.text-gradient`, `.industrial-texture`, `.steel-gradient`, `.grid-pattern` are CSS classes not Tailwind utilities

---

## 🎨 Design System

### Color Palette

#### Light Mode (Default)
| Token | Oklch Value | Usage |
|-------|-------------|-------|
| `--color-background` | `oklch(0.97 0.008 80)` | Main background (warm off-white) |
| `--color-foreground` | `oklch(0.12 0.01 260)` | Main text (near-black) |
| `--color-card` | `oklch(0.985 0.004 80)` | Card/surface backgrounds |
| `--color-secondary` | `oklch(0.925 0.006 80)` | Secondary surfaces |
| `--color-muted` | `oklch(0.94 0.005 80)` | Muted elements |
| `--color-muted-foreground` | `oklch(0.53 0.01 260)` | Muted text |
| `--color-accent` | `var(--color-accent-brand)` | Primary accent (orange: `oklch(0.68 0.19 45)`) |
| `--color-accent-foreground` | `oklch(1 0 0)` | Text on accent (white) |
| `--color-border` | `oklch(0.87 0.008 80)` | Borders & dividers |
| `--color-dark-surface` | `oklch(0.93 0.005 80)` | Alternating section bg (slightly darker off-white) |
| `--color-destructive` | `oklch(0.55 0.2 30)` | Error/alert red |

#### Dark Mode (`.dark` class)
| Token | Oklch Value | Usage |
|-------|-------------|-------|
| `--color-background` | `oklch(0.145 0 0)` | Main background (near-black) |
| `--color-foreground` | `oklch(0.985 0 0)` | Main text (white) |
| `--color-accent` | `var(--color-accent-brand)` | Same orange accent as light mode |
| `--color-dark-surface` | `oklch(0.145 0 0)` | Alternating section bg |
| (all other dark mode colors also preserved) |

## Typography Revamp — Mixed Font Technique (2026-05-20)

### Changes Applied

**Fonts** — Replaced Geist (which was loaded but never wired into CSS) with proper font loading:
- **Plus Jakarta Sans** → Base heading & body font via `next/font/google` (`--font-plus-jakarta`)
- **Playfair Display** → Accent font for dramatic emphasis (`--font-playfair`)
- **Geist_Mono** still loaded but unused (pre-existing, harmless)

**CSS Wiring** (`theme.css`, `globals.css`):
- `--font-sans` now points to `var(--font-plus-jakarta)` — the fonts are actually rendered
- Removed dead references to `--font-dm-sans` and `--font-inter` (fonts that were never loaded)
- Added `.font-display-accent` utility class in `globals.css` — Playfair Display, italic, `#D85A30`
- Registered `--font-playfair` in `@theme inline` for potential Tailwind usage

**3 Accented Headings** (rule: max 2-3 times total, one word each):
1. **Hero** → "Building **Excellence** Across Dubai" — "Excellence" accented (defining noun)
2. **Why Choose Us** → "Built on **Trust** & Excellence" — "Trust" accented (defining noun)
3. **CTA** → "Let's Build Something **Exceptional**" — "Exceptional" accented (strong adjective)

**Rules followed:**
- ✅ Max one accented word per heading
- ✅ Only on the most important heading per section
- ✅ Words are strong semantic words (nouns/adjectives)
- ✅ Unaffected sections left plain
- ✅ Span only changes font-family, font-style, and color (no size/weight/underline)

---

## 🎨 Design System

### Color Palette

#### Light Mode (Default)
| Token | Oklch Value | Usage |
|-------|-------------|-------|
| `--color-background` | `oklch(0.97 0.008 80)` | Main background (warm off-white) |
| `--color-foreground` | `oklch(0.12 0.01 260)` | Main text (near-black) |
| `--color-card` | `oklch(0.985 0.004 80)` | Card/surface backgrounds |
| `--color-secondary` | `oklch(0.925 0.006 80)` | Secondary surfaces |
| `--color-muted` | `oklch(0.94 0.005 80)` | Muted elements |
| `--color-muted-foreground` | `oklch(0.53 0.01 260)` | Muted text |
| `--color-accent` | `var(--color-accent-brand)` | Primary accent (orange: `oklch(0.68 0.19 45)`) |
| `--color-accent-foreground` | `oklch(1 0 0)` | Text on accent (white) |
| `--color-border` | `oklch(0.87 0.008 80)` | Borders & dividers |
| `--color-dark-surface` | `oklch(0.93 0.005 80)` | Alternating section bg (slightly darker off-white) |
| `--color-destructive` | `oklch(0.55 0.2 30)` | Error/alert red |

#### Dark Mode (`.dark` class)
| Token | Oklch Value | Usage |
|-------|-------------|-------|
| `--color-background` | `oklch(0.145 0 0)` | Main background (near-black) |
| `--color-foreground` | `oklch(0.985 0 0)` | Main text (white) |
| `--color-accent` | `var(--color-accent-brand)` | Same orange accent as light mode |
| `--color-dark-surface` | `oklch(0.145 0 0)` | Alternating section bg |
| (all other dark mode colors also preserved) |

### Typography
- Font: **Plus Jakarta Sans** (body + base headings via `next/font/google`)
- Accent: **Playfair Display** (italic, used sparingly — 3 words across page)
- Mono: Geist Mono (loaded but not wired into CSS — pre-existing)
- Headings: Bold, tracking-tight, text-gradient accent spans
- Body: `text-foreground/60` to `text-foreground/80` (light mode)

### Animation Patterns
- Entrance: `initial={{ opacity: 0, y: 20/30 }}` + `whileInView={{ opacity: 1, y: 0 }}`
- Hero: `initial` + `animate` (triggers on mount, not scroll)
- Stagger: `containerVariants` with `staggerChildren` for grids
- Hover: `scale`, `border-accent`, `shadow-accent` transitions
- Float: infinite y-axis oscillation via `animate={{ y: [0, -15, 0] }}`

### Section IDs (for scroll navigation)
- `#home` — HeroSection
- `#about` — AboutSection
- `#services` — ServicesSection
- `#projects` — ProjectsSection
- `#contact` — ContactSection

---

## 📝 Content Summary

### Hero
- Heading: "Building **Excellence** Across Dubai" — Cormorant Garamond + Playfair italic accent
- Subheading: "Premium villa construction and turnkey contracting across Dubai."
- CTA: "Request Quote" (#contact), "Explore Services" (#services)
- Stat cards (right side): 500+ Projects, ISO Certified (98% Quality), Dubai Operations

### Services (6 villa-focused)
New Construction, Renovation & Fit-Out, Residential Villas, Civil & Structural, MEP Works, Project Management

### Projects (7 villa projects)
Selected completed villas in: Al Barsha South 2, Al Barsha Second, Nad Al Sheba 1, Al Warqa Fourth, Al Awir First, Al Khawaneej First, Al Yalayis 3

### Why Choose Us (8 reasons)
Fast Delivery, Quality Assurance, UAE Compliance, Professional Team, Reliable Procurement, Cost Efficiency, Trusted Partner, Safety Standards

### Materials (8)
Cement, Steel, Pipes & Fittings, Electrical Supplies, Wood & Plywood, Construction Hardware, Industrial Equipment, Specialty Materials

### Contact Info
- Location: Dubai Festival City, Al Kheeran 1, Dubai, UAE
- Phone: +971 50 123 4567
- Email: info@rohitcontracting.ae
- Hours: Sat-Thu 8AM-7PM, Fri Closed
- WhatsApp: +971501234567

---

---

## Footer Revamp — Warm-Earth Cleanup (2026-05-21)

### Changes Applied

**Complete rewrite** of `src/components/Footer.tsx` to match the warm-earth design system.

**Removed:**
- `industrial-texture` overlay div (not warm-earth aesthetic)
- `glass` class from social icons (no glassmorphism)
- Unused `Building2` lucide icon import
- `bg-background`, `border-border`, `text-foreground/*` theme var references

**Typography:**
- Brand name "Rohit" → `.heading-serif` (Cormorant Garamond), color `#1C1A17`
- Column headings (Services, Company, Support) → `.heading-serif` uppercase, `#1C1A17`
- All body text → Plus Jakarta Sans (default), `#5C5047` or `#7A6250`

**Colors:**
- Background: `#E6D7C3` (matches WhyChooseUs warm earth)
- Links: `#7A6250`, hover → `#D85A30` (JS hover handlers since base is inline)
- Social icons: bg `#F2E8DB`, border `#D8C7B5`, text `#7A6250`, hover → bg `#D85A30` text `#FDF8F5`
- Brand logo: bg `#D85A30`, text `#FDF8F5`
- Contact icons: `#D85A30` accent
- Contact text: `#5C5047`, secondary email: `#7A6250`
- Borders: `#D8C7B5`
- Bottom bar: `#7A6250` text
- Scroll-to-top: bg `#D85A30`, text `#FDF8F5`

**Layout:**
- Max-width 1440px, horizontal padding 80/40/20px (class-based)
- Scroll-to-top button: absolute positioning (reverted from hacky `left-full` approach)

---

---

## Footer Polish — Warmth Boost & Social Icons (2026-05-21)

### Changes Applied

**Background warmth** — `#E6D7C3` (cool beige, grey undertone) → `#EDE0CE` (warm sand)

**Social icons** — Replaced placeholder letter initials (L, T, F, I) with actual Lucide icons:
- LinkedIn → `ExternalLink` icon
- Twitter → `MessageCircle` icon
- Facebook → `Globe` icon
- Instagram → `Camera` icon
- Moved to a `socialLinks` data array for cleaner code (icon component passed via `social.icon`)
- Icons: 16px, strokeWidth 1.5

**Column heading color** — Services / Company / Support headings: `#1C1A17` (near-black) → `#5C5047` (warm brown)

**Bottom bar divider** — `1px solid #D8C7B5` → `1px solid #E8DFD0` (lighter, softer separation)

---

## 🔧 Common Commands

```bash
# Start dev server
npm run dev

# Production build
npm run build

# Production server
npm start

# Lint
npm run lint
```

---

## 📌 Future Development Notes

### Recently Removed
- **TestimonialsSection** — removed entirely (section + component + all references) per client request

### High Priority
- **Icon verification**: Verify all Lucide icons exist when upgrading the package
- **Form backend**: Wire up the contact form (`handleSubmit` currently just `console.log`s the data)
- **Real images**: Replace placeholder gradient backgrounds with actual construction/photography
- **Real map**: Replace mini map placeholder with Google Maps or Mapbox embed

### Medium Priority
- **JSON-LD structured data**: Add Schema.org markup for LocalBusiness (construction company)
- **Google Analytics / tracking**: Add analytics
- **Responsive refinements**: Test on mobile devices thoroughly
- **Loading fallbacks**: Add `{ loading: () => null }` to dynamic imports
- **Metadata**: Add favicon to `/public/`

### Low Priority
- **Button link targets**: Footer "Services" links don't scroll to sections (use `#services`)
- **Unused `ChevronDown` import**: Imported in `Navbar.tsx` but never used
- **Animation timing**: Fine-tune stagger delays for smoother entrance
- **Bundle splitting**: Group sections into fewer dynamic chunks to reduce HTTP requests
- **Form state reset**: Add reset after submission

---

## Typography Consistency Pass + Testimonials Removal (2026-05-20)

### Changes Applied

**TestimonialsSection removed** — Section, component file (`src/components/TestimonialsSection.tsx`), and all references (`page.tsx` import + usage) deleted. No code remnants.

**New CSS utility** — `.heading-serif` class added to `globals.css`:
- Sets `font-family: var(--font-cormorant), Georgia, serif` (Cormorant Garamond)
- Paired with Tailwind's `font-bold` for weight (all section h2s already use `font-bold`)
- Replaces the more-specific `.font-heading-serif` (removed as dead code)

**All section headings standardized to Cormorant Garamond (`.heading-serif`):**
- AboutSection: "Delivering Excellence in Dubai Construction" + "Our Journey" h3
- ServicesSection: "Comprehensive Construction Solutions"
- ProjectsSection: "Featured Projects"
- MaterialsSection: "Premium Building Materials"
- ContactSection: "Get In Touch"
- WhyChooseUs: "Built on Trust & Excellence"
- CTASection: "Let's Build Something Exceptional"

**Italic accent standardization** — Changed Playfair Display (`font-display-accent`) → Cormorant italic (`font-accent-primary`) for:
- WhyChooseUs: "Trust" (now matches Hero's "Excellence" font family)
- CTASection: "Exceptional" (now matches Hero's "Excellence" font family)
- Playfair-only utility `.font-display-accent` removed as dead code

**Italic accent count:** 3 words total — "Excellence" (Hero), "Trust" (WhyChooseUs), "Exceptional" (CTA)

---

---

## Why Choose Us — Warm-Earth Premium Redesign (2026-05-21)

### Changes Applied

**Complete rewrite** of `src/components/WhyChooseUs.tsx` with a rich warm-earth architectural palette.

**Color Palette:**
- Section background: `#E6D7C3` (warm earth)
- Card surfaces: `#F2E8DB` (slightly lighter than bg)
- Card borders: `#D8C7B5`
- Hover state: bg → `#EDE0D0`, border → `#C17F4A`, translateY(`-3px`)
- No pure black or white used anywhere
- No gradients, no glassmorphism, no shadows, no neumorphism

**Typography:**
- Badge: Cormorant Garamond 15px `#D85A30` on `rgba(216,90,48,0.08)` bg
- Main heading: Cormorant Garamond weight 600, `clamp(38px, 7vw, 72px)`, color `#1C1A17`
  - "Trust" in `.font-accent-primary` (Cormorant italic #D85A30 weight 600)
  - "Excellence" in `.font-accent-secondary` (Cormorant italic #C17F4A weight 400)
- Subheading: Plus Jakarta Sans `clamp(16px, 2vw, 20px)`, color `#5C5047`, line-height 1.6

**Layout:**
- Max-width 1440px, horizontal padding 80/40/20px, vertical 140/100/72px
- Stats grid: 4-col → 2-col → 1-col responsive, gap-7 (28px)
- Feature grid: same responsive pattern, matching card styling

**Card styling:**
- Border-radius 28px, padding 48px (28px mobile)
- Left-aligned text desktop, centered text mobile
- Icon container: 64x64px, bg `rgba(216,90,48,0.08)`, border-radius 18px
- Icon: 28px, `#D85A30`, strokeWidth 1.5
- Card titles: Cormorant Garamond `clamp(22px, 2.5vw, 28px)`, `#1C1A17`
- Card descriptions: `clamp(15px, 1.5vw, 18px)`, `#5C5047`, line-height 1.6
- Stat footer: Cormorant Garamond `clamp(20px, 2vw, 24px)` `#D85A30` + label `#7A6250`

**Spacing:**
- Badge → heading: 36px | Heading → subheading: 36px
- Heading block → stats: 72px | Stats → features: 40px
- Icon → title: 24px | Title → desc: 16px | Desc → stat: 20px

**Hover:** Pure CSS via Tailwind utilities (no JS event handlers) — background warms, border shifts to `#C17F4A`, card lifts 3px.

---

## 🐛 Session Bug History

### Bug 1: Build fails — `Twitter` icon not found
- **Symptom**: `npm run build` failed with "Module not found: Can't resolve 'lucide-react' for Twitter"
- **Fix**: Replaced `Twitter` icon with letter-initial links in Footer

### Bug 2: Blank/black page after loading screen
- **Symptom**: Loading screen shows, then page is completely black. Only footer visible.
- **Root cause**: Framer Motion's `initial={{ opacity: 0 }}` renders invisible SSR DOM. Hydration issue prevents animation to visible state.
- **Fix**: `page.tsx` → client component with `dynamic(() => import(...), { ssr: false })` for all sections.

### Bug 3: Stuck loading screen
- **Symptom**: Loading screen never dismisses
- **Root cause**: React hydration error prevented `useEffect` from firing
- **Fix**: Removed Framer Motion from LoadingScreen, added script tag safety net, added ErrorBoundary

### Bug 4: Hydration mismatch — `className="dark"` on `<html>`
- **Symptom**: Console error "A tree hydrated but some attributes of the server rendered HTML didn't match the client properties"
- **Root cause**: `className="dark"` was hardcoded on `<html>` — Next.js SSR renders it, then browser extensions or React hydration detect the mismatch
- **Fix**: Removed `className="dark"`, added `suppressHydrationWarning` to `<html>`, moved dark mode to `.dark` CSS class

### Bug 5: CSS syntax error — stray duplicate declarations in theme.css
- **Symptom**: `npm run build` fails with "Missing opening {" at `theme.css:254:1`
- **Root cause**: Duplicate block of shared variable declarations appeared outside any CSS rule, likely from a str_replace operation that left remnants
- **Fix**: Removed the stray duplicate block from the end of `theme.css`

---

## 🧪 Build Status
- ✅ Build passes with ZERO errors
- ✅ TypeScript check passes
- ✅ All pages generate as static content
- ✅ Route: `/` (static prerendered)
- ⚠️ No tests written yet

---

## Hero & Layout Revamp — Warm Earth Tones + Mixed Serif Typography (2026-05-20)

### Changes Applied

**Fonts** — Added **Cormorant Garamond** (`next/font/google`, weights 300-700, normal + italic):
- `--font-cormorant` CSS variable registered in `layout.tsx`, wired into `theme.css`
- `.font-heading-serif` class — Cormorant Garamond regular weight (hero base heading)
- `.font-text-warm-italic` class — Cormorant Garamond italic, color `#8B6347` ("Across Dubai")

**New Color Tokens** (`theme.css` + `globals.css` @theme inline):
- `--color-secondary-accent: #C17F4A` — warm earth secondary accent
- `--color-heading: #1C1A17` — warm near-black for all headings
- `--color-warm-muted: #8B6347` — muted earth tone ("Across Dubai", stat card labels)
- `--color-warm-text: #5C5047` — body/small text earth tone
- `--color-card-border: #E8DFD0` — soft warm border for cards

**HeroSection.tsx** — Full revamp:
- Base heading switched from Plus Jakarta Sans → **Cormorant Garamond** (`.font-heading-serif`)
- "Excellence" retains **Playfair Display italic orange** (`.font-display-accent` — unchanged)
- "Across Dubai" → **Cormorant italic** `#8B6347` (`.font-text-warm-italic`)
- Subheading: `text-base sm:text-lg`, color `#5C5047` (`text-warm-text`)
- **Explore Services ghost button**: `1.5px` border `#1C1A17`, hover transitions to accent
- **Stat cards** (3 right-side cards):
  - `1px solid #E8DFD0` border with `3px solid #C17F4A` left accent bar
  - Tightened gap from `gap-6` to `gap-4`
  - Warm earth icon backgrounds and label colors
- Grid layout tightened to `lg:grid-cols-12` (7+5 split)
- Scroll indicator uses warm earth colors

**Navbar.tsx** — Added `borderBottom: 1px solid #E8DFD0` on scroll (inline style, scrolled state only)

### Rules Followed
- ✅ Max 2-3 accented italic words total across page (Hero "Excellence", WhyChooseUs "Trust", CTA "Exceptional")
- ✅ One word per heading, strong semantic words only
- ✅ Warm earth #1C1A17 for all headings (hero H1 uses `text-heading`)
- ✅ Background unchanged (#FAF7F2 range)
- ✅ Explore Services button has 1.5px border
- ✅ Nav border only appears on scroll, not on load

---

## UI Fixes (2026-05-19)

- **Hero CTA visibility** — [src/components/HeroSection.tsx](src/components/HeroSection.tsx)
	- **Issue**: On desktop/laptop the hero CTAs (`Request Quote`, `Explore Services`) were pushed below the initial viewport because the hero was vertically centered with large padding and very large heading sizes.
	- **Change**: Aligned hero content to the top (`items-start`), reduced inner container padding (`py-32` → `py-20` with `lg:py-32`), and reduced the largest heading size (`lg:text-8xl` → `lg:text-7xl`).
	- **Result**: Primary CTAs are visible on landing without an extra scroll on common desktop/laptop sizes.

- **Services cards: remove click affordance** — [src/components/ServicesSection.tsx](src/components/ServicesSection.tsx)
	- **Issue**: Each service card displayed a pointer cursor and appeared clickable (`cursor-pointer`) even though cards did not navigate anywhere.
	- **Change**: Removed the `cursor-pointer` utility from the service card wrapper to stop showing pointer cursor and remove implied clickability.
	- **Result**: Service cards are now non-clickable and no longer display the pointer cursor, reducing confusion.

- **Hero: remove stats block** — [src/components/HeroSection.tsx](src/components/HeroSection.tsx)
	- **Issue**: The hero's stats row (Years Experience / Projects / Emirates / Client Retention) made the hero visually heavy and pushed key CTAs down on some screens.
	- **Change**: Removed the stats block from the hero to declutter the hero section. The stats data can be moved to `AboutSection` or `WhyChooseUs` if needed later.
	- **Files changed**: `src/components/HeroSection.tsx`
	- **Result**: Hero now focuses on headline, subheading and CTAs without competing elements.

	## Copy updates (2026-05-19)

	 - **Hero**: Updated headline to "Building Excellence Across Dubai" and rewrote the subheading to reflect the client-provided company profile. File: `src/components/HeroSection.tsx`.
	- **About**: Replaced About paragraph with the DOCX copy (condensed) while preserving the heading phrase `Delivering Excellence in UAE Construction`. File: `src/components/AboutSection.tsx`.
	- **Services**: Updated services intro to: "End-to-end contracting, material supply, and trusted partnerships across the UAE — from new construction and MEP works to renovation and project management." File: `src/components/ServicesSection.tsx`.
	- **Contact**: Updated address to the full DOCX address (Sky Business Center, Floor 1–109 Office, Nadd Al Hamar Road, Dubai Festival City (Al Kheeran 1), Dubai, UAE). Kept primary client-facing email as `info@rohitcontracting.ae`. File: `src/components/ContactSection.tsx`.
	- **Footer**: Added legacy/alternate email `rohitcontracting@gmail.com` as secondary contact. File: `src/components/Footer.tsx`.
	- **SEO**: Improved page `title` and `description` in `src/app/layout.tsx` and added JSON-LD `LocalBusiness` structured data script for better search indexing.

	Next steps: verify responsive layout after text changes, update any service card descriptions that should exactly match DOCX service names, and run a Lighthouse/SEO checklist locally. Mark when you'd like me to proceed with applying deeper service-description edits.

	## Copy edits applied (2026-05-19 2)

	- Rewrote the Hero subheading to a concise company-profile tone (not verbatim from DOCX). File: `src/components/HeroSection.tsx`.
	- Rewrote the Hero subheading to a concise company-profile tone (not verbatim from DOCX). File: `src/components/HeroSection.tsx`.
	- Shortened hero subheading further to a single-line, modern phrase: "Premium villa construction and turnkey contracting across Dubai." File: `src/components/HeroSection.tsx`.
	- Replaced the Services list with the six villa-focused service entries supplied by the client, rephrased for web: `New Construction`, `Renovation & Fit-Out`, `Residential Villas`, `Civil & Structural`, `MEP Works`, `Project Management`. File: `src/components/ServicesSection.tsx`.
	- Added a short, rephrased "Selected completed villas" list to the top of the `Projects` section. File: `src/components/ProjectsSection.tsx`.

	Next steps: run a build and preview to verify text fits across breakpoints, then I will scan other components for PDF-like phrasing and propose edits. Say "run build" to continue or "qa" to skip build and do responsive checks in the browser.

