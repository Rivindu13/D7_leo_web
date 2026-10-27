# Leo District 306 D7 — Next.js redesign (v0.3)

A **separate UI starter (requires dependency install and build verification)** for the Leo District 306 D7 redesign, styled using the user-provided burgundy, gold, violet, and indigo palette and the Solana-inspired dark editorial direction.

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
- Pages: Home, About, Council, **Clubs**, Projects, Events, D7 All-Rounders, Ascent, Merch, LMS, **Resources**, Contact
- Interactive project-category filters, search, and project detail pages
- **New:** Searchable club directory with Alpha and Omega divisions, using published historical club names
- **New:** Events page with category and text filters
- **New:** Resources hub linking the publicly linked district directory and existing LMS, Ascent and Merch pages
- Functional external links to the **existing** LMS, Ascent, Merch, and official Join Us form
- Contact form opens the visitor's email app through `mailto:` (no fake server-side submission)
- Responsive layouts, semantic markup, keyboard-accessible mobile navigation, reduced-motion support

## Before putting live

1. Replace `public/leo-crest.png` with the **official approved high-resolution transparent crest**. Current transparent crest was extracted from the user's supplied color-palette screenshot as a temporary asset.
2. Replace `public/images/*.webp` with approved **real district imagery**. These crops are from a previous *AI-generated concept mockup*, not photos documenting real events.
3. Confirm historical projects, council positions and club names for the current term. Event records are still demonstrations. Approved council photos and project galleries are not yet imported.
4. Merge with the existing repo to preserve any working backend, LMS authentication, forms, database, shopping flows and deployed environment settings. The preview does not reimplement those.
5. Confirm current external links (LMS, Ascent, Merch and Join Us) and email address with district administrators.

## Key files

- `src/app/globals.css` — theme colors and all component styling
- `src/lib/data.ts` — routes, contact links, archived project dates/titles, demonstration event data
- `src/lib/legacy-content.ts` — published historical council, clubs, and achievements
- `src/components/Header.tsx` — responsive navigation
- `src/components/Shared.tsx` — page hero, project cards, CTAs, section headings
- `src/components/ProjectExplorer.tsx` — interactive filter/search
- `src/components/ContactForm.tsx` — email-app-based contact flow

## Design tokens

Burgundy `#7A184D` • Gold `#E8AF25` / `#F3D754` • Violet `#832D90` • Indigo `#3C2399` • Near-black `#0B0812`.

## Framework notes

Dependencies are listed in `package.json`. Run `npm install` on a machine with network access. This environment does not allow downloading npm packages, so a production Next.js build could not be performed here.

## V0.2 history (superseded by V0.3)
- Added `/clubs` with an interactive preview directory. V0.2 used artificial club previews; replaced by historical Alpha/Omega lists in V0.3.
- Added `/resources` with the current public district directory at `https://heyzine.com/flip-book/6ac000f48c.html` and existing district service links.
- Added interactive filtering/search on `/events`; real dates and registration routes await confirmation.
- Updated the header navigation, mobile menu numbering, footer and homepage link to include the new sections.
- Kept changes **inside this separate starter project**, not the protected existing repository.

## Validation
The source can be syntax-checked without a package install using TypeScript's parser. A real `npm run build` requires installing the listed dependencies; full dependency-based validation is not available in this restricted environment. Run a full build locally or in CI before deploying.

Before a production launch, review dependency versions and security advisories and run a full build, link checks, and browser tests in a network-enabled environment.

## V0.3: Public data migration

Preserved the historical names/dates for 20 published projects, 36 explicitly listed clubs, 45 council profiles, nine All-Rounders records, district mission/vision and two merchandise listings. Added searchable Alpha/Omega clubs, categorized project archives, historical council roster, and achievements explorer. The legacy data is **not independently verified for the current term**. The previous site claims 37 clubs but names only 36. See `MIGRATION.md` for the remaining work.

**Important:** The project archive currently preserves titles, dates and categories; it does **not** contain actual legacy photos, full stories or CMS integrations. Existing LMS, Ascent and store links remain connected to the legacy site; no authentication or purchase data is migrated.
