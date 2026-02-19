# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run start     # Run production server
npm run lint      # Run ESLint
```

> The project also has a `pnpm-lock.yaml`, but `package-lock.json` was added recently — prefer `npm` for consistency with the lock file that is tracked.

## Tech Stack

- **Next.js 15** with App Router, **React 19**, **TypeScript 5**
- **Tailwind CSS 3** for styling
- **GSAP 3** with ScrollTrigger plugin for scroll-based animations
- **Lenis** for smooth, physics-based scrolling
- **Lucide React** for icons
- Custom local font: **FK Grotesk** (loaded via `next/font/local` in `app/layout.tsx`)

## Architecture

This is a single-page marketing website for the NEAR Intents cross-chain liquidity protocol. The home page (`app/page.tsx`) composes section components sequentially: Navigation → Hero → HowItWorks → FeatureCards → IntegratePartners → TestimonialsSection → Ecosystem → NewsSection → FooterCTA.

**Component structure:**
- `components/sections/` — Full-page sections (one per visual block)
- `components/effects/` — Standalone visual effects (e.g., `AuroraRing` with mouse-tracking gradients)
- `components/shared/` — Reusable UI primitives (`CTAButton` with ghost/solid variants, `RevealOnScroll` wrapper)
- `hooks/` — `useScrollReveal` integrates GSAP ScrollTrigger for fade-in-up animations
- `lib/lenis-provider.tsx` — Client-side `LenisProvider` that wraps the app in `app/layout.tsx` for smooth scrolling; it also syncs Lenis with GSAP's ticker

**Animation pattern:** Scroll animations use `useScrollReveal` (GSAP ScrollTrigger) directly in section components, or the declarative `<RevealOnScroll>` wrapper. Lenis must be initialized before ScrollTrigger fires; this is handled in `LenisProvider`.

**Styling conventions:**
- Tailwind utilities for layout/spacing
- Custom CSS classes defined in `app/globals.css` for complex multi-step effects: `aurora-ring-gradient`, `feature-card-gradient`, `eco-circle`, `dot-pattern`, `tech-grid-bg`, `plus-separator`, `cyber-border`
- Extended Tailwind animations in `tailwind.config.ts`: `marquee`, `aurora-spin`, `cyber-spin`, `cyber-scan`, `equalizer`, `blink`, `float-diagonal`
- Brand colors: `brand-dark` (#1E1E1E background), `brand-orange` (accent, multiple shades defined in Tailwind config)
- Path alias `@/` resolves to the project root
