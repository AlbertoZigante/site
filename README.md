# site

Marketing website (Astro) — one of 3 repos: `site`, `3d_modeler`, `api`.

## Run (PowerShell)
```powershell
npm install
copy .env.example .env
npm run dev
```

## Structure
- `src/config/site.ts` — single source of truth for navigation, legal links, external URLs
- `src/components/Placeholder.astro` — rectangular zones to fill (`kind="text"` | `"figure"`)
- `src/pages/` — one file per page; all inter-page links come from `site.ts`
- Phase 2 pages (`/realisations`, `/delivery-suppliers`) carry a `phase2` flag in `site.ts`
- Phase 3 page (`/legal/cgv`) carries a `phase3` flag

## Deploy
Cloudflare Pages, build `npm run build`, output `dist`. Keep access private + noindex until GO PUBLIC
(then: `PUBLIC_NOINDEX=false`, update `public/robots.txt`, remove `X-Robots-Tag` in `public/_headers`).
