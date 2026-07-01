# Pagini de ofertă (funnel) — ghid de folosire

Pagini de tip landing pentru reclame plătite (Google / Meta / TikTok).
Sunt **ascunse** de site: `noindex`, excluse din sitemap și nelegate în meniu.
Accesibile doar prin **link direct** din reclame.

- URL: `https://northdent.ro/oferta/<slug>/`
- Sursa de adevăr: **`src/data/offers.ts`** (un obiect = o pagină).
- Pagina se generează automat din date; nu trebuie atins HTML-ul.

---

## Cum adaugi o ofertă nouă

Adaugi un obiect în array-ul `offers` din `src/data/offers.ts` și rulezi `npm run build`.
Pagina apare la `/oferta/<slug>/`.

```ts
{
  slug: "exemplu-oferta",                 // => /oferta/exemplu-oferta/
  title: "Titlu pentru tab/preview",      // meta (pagina e oricum noindex)
  description: "Descriere scurtă.",

  eyebrow: "Zona Nord, Râmnicu Vâlcea",   // text mic deasupra titlului
  badge: "Ofertă limitată",               // eticheta galbenă
  heading: "Titlul mare al ofertei",      // H1
  subheading: "O frază care explică oferta.",

  priceNow: 300,                          // prețul redus
  priceOld: 450,                          // prețul tăiat (calculează singur -% și economia)
  currency: "lei",
  priceNote: "pachet complet",            // opțional, text mic lângă preț

  deadline: "2026-07-10T23:59:00+03:00",  // finalul REAL al campaniei (vezi mai jos)

  // hero: { ... }                        // opțional, vezi „Imaginea din hero"

  includes: [                             // cardurile „Ce include" (recomandat 3)
    { title: "Pas 1", description: "..." },
    { title: "Pas 2", description: "..." },
    { title: "Pas 3", description: "..." },
  ],

  trustPoints: [                          // bife sub butoane
    "Consultație și explicații pas cu pas",
    "Programare rapidă pe WhatsApp",
    "Cabinet modern în Zona Nord",
  ],

  reviewAuthors: ["Ion's Vlog", "Maria Daiana Trifu"], // nume EXACTE din src/data/reviews.ts

  whatsappMessage: "Bună ziua! Vreau oferta ... Când aveți loc?", // mesaj precompletat

  faqs: [
    { question: "Întrebare?", answer: "Răspuns." },
  ],

  finePrint: "Condiții: valabilitate, mențiuni medicale etc.",
}
```

---

## Câmpuri importante

### Preț
Scrii doar `priceNow` și `priceOld`. Procentul reducerii (`-33%`) și „Economisești X lei"
se calculează automat.

### Deadline (timer)
`deadline` este o **dată reală** de final de campanie, în format ISO cu fus orar
(România vara = `+03:00`). Timer-ul numără până la acea dată.
După ce trece, timer-ul dispare și apare un mesaj neutru — **butoanele rămân active**.
Când vrei să prelungești oferta, schimbi doar data aici.

Exemplu: `10 iulie 2026, 23:59` → `"2026-07-10T23:59:00+03:00"`.

### WhatsApp
`whatsappMessage` este textul precompletat când omul apasă „Programează-te pe WhatsApp".
Numărul e cel global din `src/data/site.ts`. (Textul merge doar în WhatsApp, nu către
pixelii de marketing.)

### Recenzii
`reviewAuthors` = listă de nume care trebuie să existe **exact** în `src/data/reviews.ts`.
Se afișează în ordinea scrisă. Nu inventa recenzii — folosește doar cele reale.

---

## Imaginea din hero

Câmpul opțional `hero` alege ce se vede în dreapta (sus, pe mobil). Trei variante:

**1. Poza medicului** (implicit) — nu pui `hero` deloc.

**2. O imagine simplă** (oricare, alta decât medicul):
```ts
hero: {
  type: "image",
  src: "/images/oferte/poza.webp",
  alt: "Descriere pentru accesibilitate/SEO",
  note: "Text opțional sub imagine",   // opțional
  // ready: false,                     // opțional: placeholder (revine la poza medicului)
}
```

**3. Slider before/after** (bun pentru estetică — albire, fațete):
```ts
hero: {
  type: "beforeAfter",
  ready: true,                          // false = revine la poza medicului
  before: "/images/oferte/albire-inainte.webp",
  beforeAlt: "...",
  after: "/images/oferte/albire-dupa.webp",
  afterAlt: "...",
  note: "Caz real. Rezultatele diferă de la o persoană la alta.",
}
```

Pui fișierele în `public/images/oferte/`. Cât timp `ready: false` (sau imaginile lipsesc),
hero-ul rămâne poza medicului — deci pagina nu se strică niciodată.

Prioritate: **before/after → imagine simplă → poza medicului**.

---

## Reguli (obligatoriu)

- **Poze reale, cu acord.** Orice poză de pacient (mai ales before/after) necesită
  consimțământ scris pentru publicitate (GDPR). Nu folosi stock/AI drept „rezultat real".
- **Fără promisiuni absolute.** Ton calm, fără „garantat / cel mai bun". Folosește
  `finePrint` și `note` pentru mențiuni („rezultatele diferă de la o persoană la alta").
- **Publicitate medicală (RO):** before/after în reclame poate fi reglementat
  (CMSR/ANPC) — verifică înainte de a rula campanii.
- **Nu lega paginile** în meniu/footer și nu le adăuga în sitemap (sunt deja excluse).

---

## Publicare

1. Editezi/adaugi oferta în `src/data/offers.ts`.
2. (Opțional) pui imaginile în `public/images/oferte/` și setezi `ready: true`.
3. `npm run build`.
4. Deploy (Cloudflare Pages).
5. Pui linkul `https://northdent.ro/oferta/<slug>/` în reclamă.
