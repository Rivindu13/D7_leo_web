# Migration checklist — Leo District 306 D7

Public-source snapshot reviewed: **2026-10-27**. All names, positions, activities and prices below require administrator sign-off before the new website is treated as the current official source.

## Implemented in this separate Next.js starter (v0.3)
- [x] Preserve modern burgundy / violet / gold UI, navigation and responsive layout.
- [x] Preserve adapted district mission, vision, Colombo/Ratnapura coverage and historical district metrics (labelled historical).
- [x] Import 36 named Alpha/Omega clubs and working name/division search.
- [x] Import public previous council member names and roles in grouped cards; headshots absent.
- [x] Import 20 published project titles/dates; add categories, filters and detail placeholders linking to original archive.
- [x] Import nine published All-Rounders achievements with filtering/search.
- [x] Show historically listed black/white T-shirts and Rs. 2,000 legacy prices.
- [x] Retain links to district directory, LMS, Ascent, Merch, Join Us and contact email.

## Blockers / production work
- [ ] **Obtain original project GitHub access/source ZIP** (the old GitHub URL is inaccessible publicly). Inspect back-end, CMS, database schema, runtime auth and current hosting settings.
- [ ] **Obtain actual new GitHub URL/branch/commit**; this v0.3 builds upon the *previous ChatGPT starter ZIP*, not an unprovided GitHub repo.
- [ ] Obtain full projects payload and approved galleries; current dates/titles only were recoverable from rendered public content.
- [ ] Obtain approved transparent crest; previous PNG was extracted from a palette screenshot and is a temporary asset.
- [ ] Replace illustration assets with permission-cleared event photography and council portraits.
- [ ] Verify current council roster and whether any 2026–27 turnover occurred.
- [ ] Reconcile **37 clubs claimed vs 36 clubs explicitly named** in legacy About page.
- [ ] Verify achievements (2025–26 source), live merchandise pricing and current availability.
- [ ] Integrate LMS/SSO safely without changing credentials or copying production secrets.
- [ ] Plan data model + CMS/admin for Projects, Council, Clubs, Events, publications, merchandise and achievements.
- [ ] Hook up contact / newsletter forms with server validation, spam controls and privacy notices (current demo uses mailto only).
- [ ] Add SEO metadata, OG images, sitemap, structured data, accessibility and browser tests.
- [ ] Run `npm install`, `npm run lint` and `npm run build` on network-enabled dev/CI, review dependencies.
- [ ] Stage deploy, editorial review, broken-link audit, data validation, 301 redirects and rollback plan.

## Public source references
- https://d7leos.org/about
- https://d7leos.org/council
- https://d7leos.org/projects
- https://d7leos.org/all-rounders
- https://d7leos.org/merch
- https://d7leos.org/ascent
- https://d7leos.org/lms
- https://heyzine.com/flip-book/6ac000f48c.html

## Work pattern after repository access
1. Clone new GitHub repository and checkout feature branch (`feat/legacy-content-migration`).
2. Compare `src/`, `package.json`, backend, assets and environment contract before applying starter changes.
3. Extract legacy content into a typed module or editable CMS; import approved media from existing asset store.
4. Merge page by page; retain working auth, database APIs and stores, then run checks.
5. Open PR and deploy to staging for club administrator approval.

This starter does not connect to or alter any original GitHub repository.
