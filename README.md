# North Dent — site cabinet stomatologic

Site static pentru **North Dent** (CUANTIC DENT SRL), cabinet stomatologic în
zona Nord din Râmnicu Vâlcea. Construit cu **Astro + TypeScript + Tailwind CSS**,
orientat spre **SEO local**, fără CMS și fără bază de date.

## Stack

- [Astro](https://astro.build) — output static
- TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- `@astrojs/sitemap` pentru sitemap
- Conținut structurat în fișiere TypeScript (`src/data/`)

## Comenzi

```bash
npm install      # instalează dependențele
npm run dev      # server de dezvoltare
npm run build    # build static în ./dist
npm run preview  # previzualizează build-ul
```

## Deploy — Cloudflare Pages

- **Build command:** `npm run build`
- **Output directory:** `dist`
- Framework preset: Astro (sau None)

## Environment variables (opționale, tracking)

Copiază `.env.example` în `.env` și completează. Toate ID-urile de tracking sunt
opționale și **condiționate de consimțământ** (GDPR):

- `PUBLIC_GA_MEASUREMENT_ID`
- `PUBLIC_GOOGLE_SITE_VERIFICATION`
- `PUBLIC_META_PIXEL_ID`
- `PUBLIC_TIKTOK_PIXEL_ID`

## Structură

- `src/data/` — sursă unică de adevăr (site, servicii, recenzii, FAQ, navigație)
- `src/lib/` — helpers (SEO, JSON-LD schema, tracking, consimțământ)
- `src/components/` — componente reutilizabile `.astro`
- `src/layouts/` — `BaseLayout`, `ServiceLayout`, `LegalLayout`
- `src/pages/` — paginile site-ului (`.astro`)

## TODO principale înainte de publicare

- Înlocuiește textele placeholder cu conținut medical final (punctual, per pagină).
- Adaugă pozele reale în `/public/images/` (vezi `public/images/README.md`).
- Înlocuiește recenziile placeholder cu recenzii reale Google (`src/data/reviews.ts`).
- Actualizează programul (temporar) în `src/data/site.ts`.
- Verifică juridic paginile legale înainte de publicare.
- Generează un set complet de favicon.
- Completează ID-urile de tracking când sunt disponibile.
