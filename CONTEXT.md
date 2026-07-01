# CONTEXT.md — North Dent (context pentru AI)

Acest fișier oferă contextul complet al proiectului pentru orice agent AI care
continuă lucrul în alte conversații. Citește-l înainte de a face modificări.
Sursa de adevăr pentru date rămâne `src/data/`; acest fișier explică **de ce** și **cum**.

---

## 1. Ce este proiectul

Site static de prezentare pentru **North Dent**, cabinet stomatologic din
**zona Nord, Râmnicu Vâlcea**. Obiectiv principal: **SEO local** (Râmnicu Vâlcea)
și **conversie pe WhatsApp**. Limba site-ului: **română**.

Faza actuală (v1): structură tehnică, design, componente, SEO tehnic, JSON-LD,
cookie banner + tracking condiționat de consimțământ. **Copy scurt / placeholder** —
textele medicale finale se adaugă ulterior, punctual, per pagină.

---

## 2. Stack & build

- **Astro** (output `static`) + **TypeScript** + **Tailwind CSS v4** (`@tailwindcss/vite`).
- `@astrojs/sitemap` pentru sitemap.
- Fără CMS, fără bază de date, fără MDX ca metodă principală de pagini.
- Paginile principale sunt fișiere `.astro`. Conținutul structurat stă în `src/data/*.ts`.

Comenzi:
```bash
npm install
npm run dev      # dezvoltare
npm run build    # build static -> ./dist
npm run preview
```

**Config** (`astro.config.mjs`): `site: "https://northdent.ro"`, `output: "static"`,
`trailingSlash: "always"`, sitemap cu filtru care exclude `/blog/`.

**Deploy — Cloudflare Pages**: Build command `npm run build`, Output directory `dist`.

---

## 3. Date business (sursă: `src/data/site.ts`)

- Brand: **North Dent** · Firmă: **CUANTIC DENT SRL**
- Medic: **Dr. Zamfirescu Laura-Maria** — titlu: **Medic stomatolog** (NU inventa alte specializări/certificări/ani de experiență)
- Adresă: **Str. Henri Coanda Nr.40, Bl.N14, Sc.A, Ap.1, Ramnicu Valcea** (zona Nord)
- Telefon / WhatsApp: **0747 384 848** → `tel:+40747384848`
- WhatsApp: `https://wa.me/40747384848`
- Email: **contact@northdent.ro** → `mailto:contact@northdent.ro`
- Google Maps / GBP: `https://maps.app.goo.gl/xTokLoemcPu3EQgP7`
- Logo existent (extern): `https://northdent.ro/storage/logo/logo-wide-whitebg-600x150.png`
- **Program TEMPORAR** (se va schimba curând — vezi TODO): L–V 10:00–18:00, Sâmbătă/Duminică închis.

### Acțiunea principală de conversie
Mesaj pe **WhatsApp**. CTA principal: „**Programează-te pe WhatsApp**".
Acțiuni secundare: click-to-call, Google Maps, email.

---

## 4. Poziționare & ton

Modern, curat, cald, **accesibil** (NU lux/premium exclusivist). Empatic, calm,
profesionist. Public: adulți, copii, familii, **pacienți anxioși**.

**Reguli de copywriting** (obligatorii):
- Română naturală, calmă, empatică, fără exagerări.
- INTERZIS: „fără durere garantat", „cel mai bun", „rezultate garantate",
  „prețuri cele mai mici", promisiuni medicale absolute.
- Formulări preferate: „tratamentul este explicat pas cu pas", „planul se
  stabilește după consultație", „ne dorim ca fiecare pacient să se simtă ascultat
  și în siguranță", „programarea se poate face rapid pe WhatsApp".
- NU inventa date medicale, aparatură, acreditări.

---

## 5. Servicii (sursă: `src/data/services.ts`)

14 servicii, fiecare cu pagină proprie `.astro` în `src/pages/servicii/<slug>.astro`
(fișier subțire care apelează `getService("<slug>")` și randează `ServiceLayout`;
slot liber pentru text final per pagină):

consultatie-stomatologica, igienizare-profesionala, detartraj, airflow,
tratament-carii, endodontie, estetica-dentara, albire-dentara, fatete-dentare,
coroane-dentare, punti-dentare, stomatologie-copii, proteze-dentare, gutiere-bruxism.

**NU EXISTĂ și NU se creează** pagini pentru: **implant dentar**, **ortodonție**,
**prețuri**. (Cazurile chirurgicale/ortodontice se pot menționa discret în FAQ ca
îndrumate către colaboratori — fără landing pages SEO.)

Model `Service`: `slug, name, h1, title, description, intro, cardSummary, icon,
featured, whenRecommended[], howItWorks[], whatToExpect[], faqs[], related[]`.
`featured: true` => apare în grila „servicii principale" de pe homepage.
`related` => internal linking (sluguri valide din același fișier).

---

## 6. Structura de fișiere

```
src/
  data/        site, services, reviews, faqs, navigation, blog  (sursă de adevăr)
  lib/         seo.ts, schema.ts (JSON-LD), tracking.ts, consent.ts
  components/  ~22 componente .astro reutilizabile
  layouts/     BaseLayout, ServiceLayout, LegalLayout
  pages/       .astro (home, servicii/, pagini principale, legale, 404, blog/)
  styles/      global.css (Tailwind v4 @theme cu culorile brandului)
public/
  favicon/     favicon.svg, site.webmanifest  (TODO: set complet .ico/.png)
  images/      README.md cu lista de imagini așteptate (placeholder acum)
  robots.txt   include Sitemap: https://northdent.ro/sitemap-index.xml
```

Alias import: `@/` => `src/` (vezi `tsconfig.json`).

### Componente cheie
- Layout: `BaseLayout` (head, SeoHead, Header, Footer, StickyWhatsApp, ConsentManager,
  injectează JSON-LD global business/org/website), `ServiceLayout`, `LegalLayout`.
- Conversie: `WhatsAppButton`, `StickyWhatsApp`, `CtaSection`, `ContactDetails`, `MapSection`.
- SEO: `SeoHead`, `JsonLd`, `Breadcrumbs`.
- GDPR: `CookieBanner`, `ConsentManager`, `TrackingScripts`.
- UI: `Hero`, `ServiceCard`, `ServiceGrid`, `DoctorCard`, `ReviewCard`, `FaqAccordion`,
  `Header`, `MobileNav`, `Footer`, `Container`, `SectionHeading`.

---

## 7. Design system (`src/styles/global.css`, Tailwind `@theme`)

- `primary` — turcoaz/verde medical (CTA, accente încredere)
- `secondary` — albastru închis/petrol (text, elemente încredere)
- `accent` — cyan/verde deschis calm
- `ink` / `ink-soft` — text; `surface` / `surface-muted` — fundal alb/gri deschis
- Mobile-first, colțuri rotunjite (`--radius-card`), umbre discrete, focus vizibil,
  `prefers-reduced-motion` respectat. Font Inter. Fără carousel-uri/animații grele.

---

## 8. SEO & JSON-LD

- `title`, `meta description`, `canonical`, OG + Twitter pe fiecare pagină (via `SeoHead`).
- Un singur `<h1>` per pagină; breadcrumbs vizibile + `BreadcrumbList` unde are sens.
- H1/title servicii includ „Râmnicu Vâlcea".
- JSON-LD (`src/lib/schema.ts`): `Dentist`+`MedicalBusiness`+`LocalBusiness` (global),
  `Organization`, `WebSite`, `Person` (pagina medic), `BreadcrumbList`, `FAQPage`
  (doar pentru FAQ-urile VIZIBILE pe pagină).
- **INTERZIS**: `Review` și `AggregateRating` schema pentru North Dent
  (evităm markup self-serving). Recenziile se afișează, dar fără schema.
- robots.txt nu blochează pagini importante; blog exclus din sitemap.

---

## 9. Tracking & GDPR (critic)

- ID-uri prin env vars (placeholder): `PUBLIC_GA_MEASUREMENT_ID`,
  `PUBLIC_GOOGLE_SITE_VERIFICATION`, `PUBLIC_META_PIXEL_ID`, `PUBLIC_TIKTOK_PIXEL_ID`
  (vezi `.env.example`).
- **Nimic nu se încarcă înainte de consimțământ.** GA doar cu categoria „analytics";
  Meta Pixel + TikTok Pixel doar cu categoria „marketing". Logica în
  `src/lib/consent.ts` (localStorage, cheie `northdent_consent_v1`, event
  `northdent:consentchange`) și `src/lib/tracking.ts` (injectare lazy).
- Banner RO (`CookieBanner.astro`): categorii **Necesare / Analiză / Marketing**;
  butoane **Accept toate / Respinge opționale / Personalizează / Salvează preferințele**;
  linkuri către politici. Footer are `#open-cookie-settings` („Setări cookies") care
  redeschide panoul.
- **Evenimente permise (generale, fără date medicale sensibile)**: `whatsapp_click`,
  `phone_click`, `maps_click`, `contact_email_click`, `service_page_view`.
  NU trimite numele serviciului către pixeli de marketing; folosește context generic
  `{ category: "service" }`. Elementele cu `data-track` (+ opțional `data-track-category`)
  declanșează evenimentele.

---

## 10. Navigație & pagini

- Header desktop / footer: Acasă, Servicii, **Medici**, Despre cabinet,
  Recenzii, Contact + CTA WhatsApp. Mobil: hamburger (`MobileNav`) + CTA WhatsApp.
  Pagina `/medici/` listează medicul (`DoctorCard`) și duce către pagina dedicată
  `/dr-zamfirescu-laura-maria/` (aceasta rămâne pagină SEO importantă, dar nu mai
  apare direct în meniu). Breadcrumb medic: Acasă › Medici › Dr. Zamfirescu Laura-Maria.
- Footer: contact, adresă, program, servicii principale, legale, „Setări cookies",
  mențiune CUANTIC DENT SRL, copyright.
- **Blog**: pregătit tehnic (`/blog/` „în curând" + `/blog/[slug]`), **NEpromovat** în
  nav principal, exclus din sitemap. Articole în `src/data/blog.ts` (gol acum).

---

## 11. Status verificare (v1)

Build OK (27 pagini, static în `dist`, sitemap + robots.txt generate, fără lint errors).
Trei QA (build/routing, conversie/GDPR/UX, SEO/conținut) au trecut; singura observație
(breadcrumbs pe `/blog/`) a fost rezolvată.

---

## 12. TODO-uri rămase (înainte de publicare)

Convenție TODO în cod: caută `TODO` și `TODO JURIDIC` în `src/`.

- [x] **Texte medicale finale** per serviciu — DONE. Conținut redactat în
      `src/data/services.ts`: `intro` + câmp nou `body` (proză unică per pagină,
      randat în `ServiceLayout`) + `whenRecommended/howItWorks/whatToExpect` extinse
      + câte 3 FAQ per serviciu. Respectă regulile (fără promisiuni absolute, fără
      date inventate, SEO local). Slot-ul din fiecare `servicii/*.astro` rămâne liber
      pentru eventuale adăugiri viitoare. (Se poate rafina în continuare punctual.)
- [x] **Pagina medic** (`dr-zamfirescu-laura-maria.astro`): text final DONE — intro +
      secțiunile „Abordarea mea", „Pentru pacienții anxioși", „Pentru adulți, copii și
      familii" (voce persoana I, fără specializări/certificări/ani inventați).
- [~] **Poze reale** în `/public/images/` (vezi `public/images/README.md`):
      - [x] Poză medic — `galerie/dr-laura-maria-zamfirescu-dentist-valcea.webp`,
            folosită în `DoctorCard`, pagina medicului și galerie (cale centrală în
            `site.doctor.photo` / `site.doctor.photoAlt`).
      - [ ] logo local, `og-default.jpg` (1200×630), restul galeriei (cabinet exterior,
            recepție, sală tratament, detalii). Adaugă fișierul, apoi în `galerie.astro`
            marchează item-ul cu `ready: true` ca să se randeze `<img>`.
- [x] **Recenzii reale Google** în `src/data/reviews.ts` — DONE (6 recenzii reale
      transcrise din capturi Google; fără Review/AggregateRating schema). Notă: recenzia
      fără text (Ionuț Enachioiu, doar rating) a fost omisă intenționat.
- [ ] **Program final** în `src/data/site.ts` (`openingHours`) — acum e temporar;
      actualizează și `openingHoursSpecification` se recalculează automat.
- [ ] **Favicon complet**: `favicon.ico`, `apple-touch-icon.png` în `/public/favicon/`
      (acum doar `favicon.svg` + `site.webmanifest`).
- [ ] **Google Maps embed**: setează `site.mapsEmbedUrl` pentru harta interactivă
      (acum `MapSection` afișează un link către GBP).
- [ ] **Tracking IDs**: completează env vars când sunt disponibile (GA4, GSC, Meta, TikTok).
      GSC se poate verifica și prin DNS TXT / fișier HTML.
- [ ] **Retragerea consimțământului**: momentan scripturile deja încărcate rămân active
      până la refresh; ștergerea retroactivă a cookie-urilor e marcată TODO în `tracking.ts`.
- [ ] **Verificare juridică** a paginilor legale (`politica-de-confidentialitate`,
      `politica-cookies`, `termeni-si-conditii`) — texte placeholder marcate `TODO JURIDIC`,
      NU sunt consultanță juridică finală.
- [ ] **Blog** (opțional, viitor): activează doar când există articole; adaugă în nav
      abia atunci; definește strategia de conținut (`body` HTML în `src/data/blog.ts`).

---

## 13. Reguli de aur pentru orice modificare

1. **Nu crea** pagini de implant, ortodonție sau prețuri.
2. **Nu adăuga** Review/AggregateRating schema.
3. Tracking **doar** după consimțământ; **niciodată** date medicale sensibile către pixeli.
4. Păstrează un singur `<h1>` per pagină și SEO local (Râmnicu Vâlcea) în servicii.
5. Modifică datele în `src/data/`, nu hardcoda în pagini.
6. Respectă tonul: calm, empatic, accesibil, fără promisiuni medicale absolute.
7. Rulează `npm run build` după modificări; păstrează output static curat.
