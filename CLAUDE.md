# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (TypeScript + Next.js)
npm run lint     # ESLint check
npm start        # Serve production build
```

No test suite exists yet. TypeScript errors surface during `npm run build`.

## Architecture

### SSR + Client Hydration Pattern

The site uses a two-layer rendering strategy to solve the Framer Motion + SSR incompatibility:

1. **`src/app/page.tsx`** (server component) renders lightweight `*Static` components (`HeroStatic`, `AboutStatic`, etc.) for immediate paint and crawler indexing.
2. **`src/components/MainContent.tsx`** (client component, `"use client"`) mounts after hydration and dynamically imports all interactive sections with `{ ssr: false }`. Each dynamic import uses the corresponding `*Static` as its `loading` fallback.
3. `MainContent.useEffect` adds `client-mounted` class to `<html>`. CSS uses this to hide the static fallbacks once the interactive components take over, preventing duplicate DOM.

**Rule:** Never SSR Framer Motion components. All animated sections must go through `dynamic(() => import(...), { ssr: false })` in `MainContent.tsx`.

### Theming

- Tailwind v4 — configured entirely via CSS (no `tailwind.config.ts` needed)
- `src/styles/theme.css` — all CSS custom properties (`:root` light mode, `.dark` dark mode)
- `src/app/globals.css` — imports Tailwind + `theme.css`, defines `@theme inline {}` for Tailwind token registration, and all custom utility classes (`.glass-card`, `.heading-serif`, `.font-accent-primary`, `.warm-shimmer`, etc.)
- Warm-earth palette lives in `:root` CSS vars: `--bg-cream`, `--bg-beige`, `--bg-earth`, `--text-heading`, `--text-body`, `--text-muted`, `--border-warm`, `--border-earth`
- Brand orange accent: `oklch(0.68 0.19 45)` / `#D85A30`

### Fonts

Loaded in `src/app/layout.tsx` via `next/font/google`, exposed as CSS variables:
- `--font-plus-jakarta` → body and base headings (`font-sans`)
- `--font-cormorant` → section headings (`.heading-serif` class)
- `--font-playfair` → loaded but rarely used; Cormorant italic is preferred
- `.font-accent-primary` — Cormorant italic `#D85A30` (used on ≤3 accent words across the whole page)

### Key Files

| File | Role |
|------|------|
| `src/app/page.tsx` | Server entry — renders static fallbacks + `<MainContent />` |
| `src/components/MainContent.tsx` | Client wrapper — all dynamic imports, loading screen, scroll progress |
| `src/app/layout.tsx` | Fonts, metadata, JSON-LD, `<ErrorBoundary>`, Vercel Analytics |
| `src/styles/theme.css` | All CSS custom properties (the source of truth for colors) |
| `src/app/globals.css` | Tailwind imports, `@theme inline`, utility classes |
| `src/components/*Static.tsx` | Server-renderable, no Framer Motion, used as SSR fallbacks |
