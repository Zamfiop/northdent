# Imagini North Dent

## Logo (`logo/`)
- `logo-wide.svg`, `logo-wide-white.svg`, `logo-square.svg`, `logo-square-white.svg`

## Open Graph
- `og-default.webp` — share image (1200×630), vezi `site.ogImage`

## Galerie (`galerie/`)
Sursa de adevăr pentru lista afișată: `src/data/gallery.ts`.

| Fișier | Folosit în |
|--------|------------|
| `cabinet-stomatologic.webp` | Homepage Hero, galerie |
| `dr-laura-maria-zamfirescu-dentist-valcea.webp` | Medic, DoctorCard, galerie |
| `dentist-valcea-cabinet.webp` | Galerie |
| `cabinet-stomatologic-valcea-pacient-informat.webp` | Galerie |
| `cabinet-stomatologic-valcea-detartraj.webp` | Galerie |
| `albire-profesionala-valcea.webp` | Galerie |
| `cabinet-stomatologic-radiografie.webp` | Galerie |
| `radiografie-cabinet-stomatologic.webp` | Galerie |
| `interpretare-radiografie-dentist-valcea.webp` | Galerie |

La adăugarea unei imagini noi: pune fișierul în `galerie/`, apoi adaugă intrarea în `src/data/gallery.ts` cu `alt` descriptiv și local (Râmnicu Vâlcea).

## Oferte / funnel (`oferte/`)
Imagini pentru paginile de campanie (`src/data/offers.ts`). Before/after la albire:

| Fișier | Folosit în |
|--------|------------|
| `albire-inainte.webp` | `/oferta/albire-dentara/` — slider „Înainte" |
| `albire-dupa.webp` | `/oferta/albire-dentara/` — slider „După" |

IMPORTANT: folosește DOAR poze reale ale unui pacient, cu acordul lui scris pentru
publicitate (GDPR). Recomandat: același cadru/unghi/lumină pentru ambele. După ce
adaugi fișierele, setează `hero.ready: true` la oferta respectivă în `src/data/offers.ts`
ca slider-ul să înlocuiască poza medicului.
