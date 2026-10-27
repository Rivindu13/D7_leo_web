# Leo District 306 D7 — Next.js redesign (v0.1)

A **separate, working UI starter** for the Leo District 306 D7 redesign, styled using the user-provided burgundy, gold, violet, and indigo palette and the Solana-inspired dark editorial direction.

> This is **not** a modification of the private `leodistrict306d7/D7Website` repository. It can be merged into that project after the source ZIP or GitHub access is provided.

## Setup

```bash
npm install
npm run dev
```

Open **http://localhost:3000**. To compile and check before deployment:

```bash
npm run lint
npm run build
```

## What works

- Next.js App Router + React + TypeScript
- Responsive dark themed homepage, full navigation, desktop and mobile menus
- Pages: Home, About, Council, Projects, Events, D7 All-Rounders, Ascent, Merch, LMS, Contact
- Interactive project-category filters, search, and project detail pages
- Functional external links to the **existing** LMS, Ascent, Merch, and official Join Us form
- Contact form opens the visitor's email app through `mailto:` (no fake server-side submission)
- Responsive layouts, semantic markup, keyboard-accessible mobile navigation, reduced-motion support

## Before putting live

1. Replace `public/leo-crest.png` with the **official approved high-resolution transparent crest**. Current transparent crest was extracted from the user's supplied color-palette screenshot as a temporary asset.
2. Replace `public/images/*.webp` with approved **real district imagery**. These crops are from a previous *AI-generated concept mockup*, not photos documenting real events.
3. Replace all sample projects and events in `src/lib/data.ts` with fact-checked information. Council members are intentionally **not named or pictured** until actual approved details are provided.
4. Merge with the existing repo to preserve any working backend, LMS authentication, forms, database, shopping flows and deployed environment settings. The preview does not reimplement those.
5. Confirm current external links (LMS, Ascent, Merch and Join Us) and email address with district administrators.

## Key files

- `src/app/globals.css` — theme colors and all component styling
- `src/lib/data.ts` — routes, contact links and demo project/event data
- `src/components/Header.tsx` — responsive navigation
- `src/components/Shared.tsx` — page hero, project cards, CTAs, section headings
- `src/components/ProjectExplorer.tsx` — interactive filter/search
- `src/components/ContactForm.tsx` — email-app-based contact flow

## Design tokens

Burgundy `#7A184D` • Gold `#E8AF25` / `#F3D754` • Violet `#832D90` • Indigo `#3C2399` • Near-black `#0B0812`.

## Framework notes

Dependencies are listed in `package.json`. Run `npm install` on a machine with network access. This environment does not allow downloading npm packages, so a production Next.js build could not be performed here.
