# Rohit Contracting L.L.C — Villa Construction Website

A production website for a Dubai-based villa construction and turnkey contracting company. Built end-to-end with **Next.js 16**, **TypeScript**, **Tailwind CSS v4** and **Framer Motion**, focused on a cinematic brand experience without sacrificing crawlability, accessibility or layout stability.

**Live site:** [www.rohitcontracting.ae](https://www.rohitcontracting.ae)

![Rohit Contracting website preview](docs/preview-desktop.png)

---

## Why this project is worth a look

Most marketing sites built with an animation library ship a beautiful client-rendered page that search engines can barely read. This project keeps the animations **and** the SEO:

- **Server-rendered content + client animation islands.** Every section has a lightweight, animation-free static counterpart that is prerendered into the HTML. The animated version (Framer Motion) mounts on the client and replaces it. Crawlers and no-JS visitors get the full content; everyone else gets the motion.
- **Zero layout shift.** Entrance motion is mostly transform/opacity based, the hero image is preloaded with `next/image`, and media sits in sized containers, so the measured **CLS is 0.00**.
- **Resilient rendering.** A React error boundary, timed loading-screen dismissal with a `<noscript>` fallback that removes the overlay entirely, and `loading` fallbacks for every dynamic import mean a failed chunk or a JS-less visit can't produce a blank page.
- **Real conversion path.** The contact form posts to Web3Forms with client-side validation, per-field error messages, submission states and a reset on success.

---

## Measured results

Lighthouse 13.6.0, production build (`next build` + `next start`), Chrome headless, **median of 3 runs per form factor** — measured 18 Nov 2026.

| Category | Desktop | Mobile |
|---|---|---|
| Performance | **86** *(84–90)* | **69** *(67–70)* |
| Accessibility | **96** | **97** |
| Best Practices | **100** | **100** |
| SEO | **100** | **100** |
| Cumulative Layout Shift | **0.00** | **0.00** |

| Core Web Vital | Desktop | Mobile |
|---|---|---|
| First Contentful Paint | 0.3 s | 1.1–1.2 s |
| Largest Contentful Paint | 0.3 s | 1.1–1.2 s |
| Total Blocking Time | 180–270 ms | 1.4–1.9 s |
| Total page weight | ~933 KiB | ~898 KiB |

Other verified numbers:

| Signal | Value |
|---|---|
| Build | `next build` completes with **0 errors** |
| Type checking | **strict** mode, 0 errors |
| Rendering | `/` and `/_not-found` **statically prerendered** |
| Production bundle | largest JS chunk **224 KB** (Framer Motion) |
| Images | **WebP/AVIF** via `next/image`, hero asset 3168×1344 @ 212 KB |
| Sections | 7 page sections, each with a static SSR twin |
| Project galleries | 7 villa projects, 12 photographs |
| SEO plumbing | Metadata API, Open Graph/Twitter cards, JSON-LD `LocalBusiness`, `robots.txt`, `sitemap.xml` |

> Performance is measured with Lighthouse's standard mobile emulation (4× CPU throttle). The site is animation-heavy by design; the remaining mobile cost is hydration of the motion layer, which is the next optimisation target.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.6 (App Router, Turbopack) |
| UI | React 19.2.4 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 (CSS-first config), custom CSS design tokens |
| Motion | Framer Motion 12 |
| Icons | lucide-react |
| Forms | Web3Forms API |
| Analytics | Vercel Analytics, Speed Insights, `web-vitals` reporter |
| Deployment | Vercel |

---

## Features

- **Cinematic hero** with scroll-linked parallax, spring-smoothed text fade and a cross-device background image.
- **5-service grid**, **filterable 7-project gallery** with a keyboard-navigable lightbox (arrow keys, Escape), **milestone timeline**, **animated counters**, **why-choose-us** reasons and a **conversion CTA**.
- **Sticky, scroll-aware navbar** with `IntersectionObserver`-driven active-section highlighting (no per-frame layout reads).
- **Scroll progress bar**, floating **WhatsApp** button, and a custom **loading screen** with timed dismissal.
- **Contact form** with validation, loading/success/error states and a WhatsApp fallback.
- **Semantic landmarks**, labelled controls and sequentially ordered headings (Lighthouse Accessibility 96–97).
- **SEO**: per-page metadata, Open Graph/Twitter cards, structured data for a local business, sitemap and robots directives.
- **Design system**: warm-earth palette in OKLCH, Cormorant Garamond display type paired with Plus Jakarta Sans, documented in [`docs/DESIGN.md`](docs/DESIGN.md).

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
# → http://localhost:3000

# 3. Production build and preview
npm run build
npm start
```

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts, metadata, JSON-LD, error boundary, analytics
│   ├── page.tsx          # Server entry — renders MainContent
│   └── globals.css       # Tailwind v4 theme + custom utilities
├── components/
│   ├── MainContent.tsx   # Client shell: dynamic (ssr:false) animated sections
│   ├── *Static.tsx       # SSR-safe twins of each section (SEO + no-JS)
│   ├── *Section.tsx      # Framer Motion versions mounted on the client
│   ├── Navbar.tsx / Footer.tsx / WhatsAppButton.tsx
│   └── ErrorBoundary.tsx / WebVitalsReporter.tsx
├── lib/utils.ts
└── styles/theme.css      # Design tokens (OKLCH), light/dark foundations
public/
├── projects/             # Optimised project photography
├── robots.txt / sitemap.xml
└── bg.webp               # Hero image
docs/
├── DESIGN.md             # Design system and redesign brief
└── preview-desktop.png   # README screenshot
```

### Rendering strategy

```
Request → prerendered HTML (static section twins, full content)
        → hydration
        → dynamic import of animated section (ssr: false)
        → static twin swaps to the live, interactive section
```

This is what keeps Lighthouse SEO at 100 while the page still animates.

---

## Performance & accessibility notes

- Fonts are self-hosted through `next/font`, so there are no render-blocking third-party requests.
- Images are served as AVIF/WebP with responsive `sizes`; the hero image is `priority`-loaded.
- Scroll listeners are passive; active-nav tracking uses `IntersectionObserver` instead of per-frame `getBoundingClientRect()` calls.
- Verified with Lighthouse, including categories Accessibility (95–97) and Best Practices (100).

**Known item:** two CTA buttons use white text on the brand orange (3.08:1), which keeps accessibility at 96–97 instead of 100. The fix is a palette decision (dark text on orange, or a darker orange), intentionally left to the brand owner.

---

## Notes

- The contact form uses Web3Forms; the access key is intentionally public (it is a client-side form endpoint).
- The site is a single-page marketing site; there is no database or CMS.
- No test suite yet — the verification loop is `next build` + Lighthouse.

---

Built by [Hardeep Shetty](https://github.com/Dashetty).
