# site

Marketing website (Astro) — one of 3 repos: `site`, `3d_modeler`, `api`.

## Run (PowerShell)
```powershell
npm install
copy .env.example .env
npm run dev
```

## Structure
- `src/config/site.ts` — single source of truth for navigation (i18n keys + paths), legal links, external URLs
- `src/i18n/locales/{en,fr,it}.ts` — all UI strings; `en.ts` defines the shape, fr/it are type-checked against it
- `src/i18n/index.ts` — `useI18n(lang)` → `{ t, l }` (translate key / localized path)
- `src/components/Placeholder.astro` — rectangular zones to fill (`kind="text"` | `"figure"`), labels not translated yet
- `src/pages/[lang]/` — one file per page, built for en/fr/it (`/en/pricing`, `/fr/pricing`, ...); `/` redirects to saved/browser language
- Language dropdown: `src/components/LangSwitcher.astro` (choice saved in `localStorage`)
- Phase 2 pages (`/realisations`, `/delivery-suppliers`) carry a `phase2` flag in `site.ts`
- Phase 3 page (`/legal/cgv`) carries a `phase3` flag

## Deploy
Cloudflare Pages, build `npm run build`, output `dist`. Keep access private + noindex until GO PUBLIC
(then: `PUBLIC_NOINDEX=false`, update `public/robots.txt`, remove `X-Robots-Tag` in `public/_headers`).
