# Project: Rohit Contracting L.L.C

A high-performance, visually premium landing page for a Dubai-based construction and building materials company.

## Project Overview

- **Goal:** Professional digital presence for a construction firm, focusing on villa construction, material supply, and turnkey contracting.
- **Vibe:** "Premium, established, precise, and warm."
- **Target Market:** Dubai, UAE (High-end residential and commercial).

## Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org) (App Router)
- **Runtime:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com) (using `@tailwindcss/postcss`)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev)
- **Analytics:** Vercel Analytics & Speed Insights
- **Language:** TypeScript

## Architecture & Conventions

### 1. Performance-First Client Rendering
- The main landing page (`src/app/page.tsx`) uses dynamic imports (`next/dynamic`) for almost all sections.
- **Why:** To prevent hydration mismatches with `framer-motion` and ensure a smooth initial load experience with the custom `LoadingScreen`.
- **Convention:** Most interactive sections should be client components (`"use client"`) and dynamically imported in the main page.

### 2. Styling & Design Tokens
- Design tokens are managed in `src/styles/theme.css`.
- **Oklch Colors:** Colors are defined using the `oklch` format for better perceptual uniformity and modern CSS compatibility.
- **Variables:** Prefer using semantic variables (e.g., `var(--color-primary)`, `var(--color-accent-brand)`) over hardcoded hex values.

### 3. Loading & Transitions
- A custom `LoadingScreen` manages the initial entry experience.
- `src/app/layout.tsx` includes a "safety net" script to force-hide the loading screen if React hydration fails or takes too long (>6s).

### 4. SEO & Metadata
- Metadata is centralized in `src/app/layout.tsx`.
- JSON-LD structured data (LocalBusiness) is implemented in the root layout for local SEO optimization in the Dubai/UAE region.

## Building and Running

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## Directory Structure

- `src/app/`: Next.js App Router (Layouts, Page, Global CSS).
- `src/components/`: Reusable React components, organized by section (e.g., `HeroSection.tsx`, `AboutSection.tsx`).
- `src/lib/`: Utility functions (e.g., `cn` for Tailwind class merging).
- `src/styles/`: Global styles and theme definitions.
- `public/`: Static assets like icons and images.

## Development Principles

- **Surgical Updates:** When modifying components, maintain the existing aesthetic and spacing conventions defined in the inline styles or Tailwind classes.
- **Animation Consistency:** Use `framer-motion` for all transitions to maintain the "premium" feel.
- **Type Safety:** Ensure all props and data structures are strictly typed.
