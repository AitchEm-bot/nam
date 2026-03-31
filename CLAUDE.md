# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run ESLint
- `npm start` — serve production build

## Tech Stack

- **Next.js 16.2.1** (App Router) with React 19 and TypeScript
- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses `@theme inline` and `@import "tailwindcss"` syntax in `app/globals.css`, not a `tailwind.config` file
- **lucide-react** for icons
- Path alias: `@/*` maps to project root

## Architecture

This is the marketing/product site for **NAM**, an AI voice intelligence platform for Saudi enterprise.

- `app/` — Next.js App Router pages (all Server Components by default). Routes: `/`, `/features`, `/pricing`, `/use-cases`, `/about`, `/contact`, `/careers`, `/legal`, `/signin`, `/signup`
- `components/` — shared components (`Header`, `Footer`) used across pages
- `public/` — static assets including desert-themed background images and audio

## Design System

All custom colors, fonts, and animations are defined in `app/globals.css` using CSS variables and Tailwind v4 `@theme inline`:

- **Colors**: `nam-black` (#0B0B0C), `nam-white` (#F7F5F2), `nam-sand` (#E8E3D9), `nam-blue` (#1C2230), `nam-indigo` (#2D3A5A)
- **Fonts**: Gambetta (serif, for headings), Satoshi (sans-serif, body) — loaded from Fontshare in `app/layout.tsx`
- **Animations**: `fade-up`, `slow-zoom`, `pulse-slow` with staggered `delay-*` utility classes
- **Utility classes**: `.ink-diffusion`, `.noise-overlay`, `.glass-card` defined in globals.css

## Key Conventions

- Dark theme throughout — `bg-nam-black` background, `text-nam-white` foreground
- Sand-colored accents with opacity variants (e.g., `text-nam-sand/70`)
- Rounded-full CTAs with glow shadows
- Remote images allowed from `vgbujcuwptvheqijyjbe.supabase.co` (configured in `next.config.ts`)
