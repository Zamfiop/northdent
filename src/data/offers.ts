// Pagini de tip funnel (landing) pentru campanii plătite (Google / Meta / TikTok).
//
// Reguli importante:
//  - Aceste pagini sunt NEindexate (noindex) și EXCLUSE din sitemap (vezi
//    astro.config.mjs). Sunt accesibile doar prin link direct din reclame.
//  - Nu sunt legate din navigația site-ului.
//  - Respectă tonul North Dent: calm, fără promisiuni medicale absolute.
//    Urgența vine dintr-un deadline REAL de campanie, nu dintr-un timer fals.
//  - `deadline` este o dată ISO cu fus orar (RO vară = +03:00). Timer-ul
//    numără până la această dată; după expirare, CTA rămâne activ.

import { site } from "@/data/site";

export interface OfferInclude {
  title: string;
  description: string;
}

export interface OfferFaq {
  question: string;
  answer: string;
}

/** Vizualul din hero. Implicit (undefined) => poza medicului. */
export type OfferHero =
  | { type: "doctor" }
  | {
      /** O singură imagine, alta decât poza medicului. */
      type: "image";
      /** Opțional. Dacă e false, hero-ul revine la poza medicului (placeholder). */
      ready?: boolean;
      src: string;
      alt: string;
      /** Mențiune discretă sub imagine. */
      note?: string;
    }
  | {
      type: "beforeAfter";
      /** true DOAR când imaginile reale (cu acord pacient) există în /public/images/.
       *  Cât timp e false, hero-ul revine automat la poza medicului. */
      ready: boolean;
      before: string;
      beforeAlt: string;
      after: string;
      afterAlt: string;
      /** Mențiune discretă sub imagine (evită promisiuni absolute). */
      note?: string;
    };

export interface Offer {
  /** Slug pentru URL: /oferta/<slug>/ */
  slug: string;

  // Meta (pagina e noindex, dar completăm pentru share/preview intern)
  title: string;
  description: string;

  // Hero
  eyebrow: string;
  badge: string;
  heading: string;
  subheading: string;

  // Preț
  priceNow: number;
  priceOld: number;
  currency: string;
  /** Notă scurtă lângă preț, ex. "pachet complet" */
  priceNote?: string;

  /** Deadline REAL al campaniei (ISO cu fus orar). */
  deadline: string;

  /** Vizualul din hero (implicit poza medicului). */
  hero?: OfferHero;

  /** Ce include pachetul */
  includes: OfferInclude[];

  /** Puncte de încredere afișate sub CTA */
  trustPoints: string[];

  /** Numele autorilor din src/data/reviews.ts de afișat pe pagină */
  reviewAuthors: string[];

  /** Mesaj precompletat pentru WhatsApp */
  whatsappMessage: string;

  faqs: OfferFaq[];

  /** Condiții / mențiuni discrete (fine print) */
  finePrint: string;
}

export const offers: Offer[] = [
  {
    slug: "detartraj-periaj-airflow",
    title: "Ofertă Detartraj + Periaj + Airflow — 199 lei | North Dent Râmnicu Vâlcea",
    description:
      "Pachet complet de igienizare profesională (detartraj cu ultrasunete, periaj profesional și Airflow) la 199 lei în loc de 250 lei. Ofertă limitată la North Dent, Zona Nord, Râmnicu Vâlcea.",

    eyebrow: "Zona Nord, Râmnicu Vâlcea",
    badge: "Ofertă limitată",
    heading: "Igienizare profesională completă: Detartraj + Periaj + Airflow",
    subheading:
      "Dinți vizibil mai curați într-o singură ședință, cu detartraj cu ultrasunete, periaj profesional și Airflow — la un preț special.",

    priceNow: 199,
    priceOld: 250,
    currency: "lei",
    priceNote: "pachet complet",

    deadline: "2026-07-10T23:59:00+03:00",

    includes: [
      {
        title: "Detartraj cu ultrasunete",
        description:
          "Îndepărtarea tartrului de pe suprafața dinților și de la nivelul gingiei, cu blândețe.",
      },
      {
        title: "Periaj profesional",
        description:
          "Curățarea petelor și a plăcii bacteriene rămase, pentru o suprafață netedă.",
      },
      {
        title: "Airflow",
        description:
          "Jet fin de aer, apă și pulbere care ridică petele de la cafea, ceai sau fumat.",
      },
    ],

    trustPoints: [
      "Consultație și explicații pas cu pas",
      "Programare rapidă pe WhatsApp",
      "Cabinet modern în Zona Nord",
    ],

    reviewAuthors: ["Ion's Vlog", "Maria Daiana Trifu", "Rosianu Silviu"],

    whatsappMessage:
      "Bună ziua! Vreau să profit de oferta Detartraj + Periaj + Airflow la 199 lei. Când aveți loc?",

    faqs: [
      {
        question: "Cât durează o ședință?",
        answer:
          "De obicei în jur de 45–60 de minute, în funcție de câtă placă și tartru s-au acumulat.",
      },
      {
        question: "Este dureros?",
        answer:
          "Majoritatea pacienților resimt doar o senzație ușoară. Lucrăm cu blândețe și îți explicăm fiecare pas.",
      },
      {
        question: "Cum profit de ofertă?",
        answer:
          "Scrie-ne pe WhatsApp și îți propunem cel mai apropiat interval disponibil, în limita perioadei ofertei.",
      },
    ],

    finePrint:
      "Ofertă valabilă până la 10 iulie 2026, în limita locurilor disponibile. Prețul se referă la pachetul de igienizare descris mai sus. Dacă la consultație se identifică nevoia altor tratamente, acestea se discută și se stabilesc separat, împreună cu tine.",
  },
  {
    slug: "albire-dentara",
    title: "Ofertă Albire dentară — 699 lei | North Dent Râmnicu Vâlcea",
    description:
      "Albire dentară profesională la 699 lei în loc de 1200 lei. Un zâmbet mai luminos, cu rezultat natural, sub supravegherea medicului. Ofertă limitată la North Dent, Zona Nord, Râmnicu Vâlcea.",

    eyebrow: "Zona Nord, Râmnicu Vâlcea",
    badge: "Ofertă limitată",
    heading: "Albire dentară profesională pentru un zâmbet mai luminos",
    subheading:
      "Deschide nuanța dinților într-un mod controlat, sub supravegherea medicului, pentru un rezultat uniform și natural — la un preț special.",

    priceNow: 699,
    priceOld: 1200,
    currency: "lei",
    priceNote: "albire profesională în cabinet",

    // TODO: confirmă data de final a campaniei (deocamdată aliniată cu prima ofertă).
    deadline: "2026-07-10T23:59:00+03:00",

    hero: {
      type: "beforeAfter",
      ready: true,
      before: "/images/oferte/albire-inainte.webp",
      beforeAlt: "Nuanța dinților înainte de albire — caz real North Dent, Râmnicu Vâlcea",
      after: "/images/oferte/albire-dupa.webp",
      afterAlt: "Nuanța dinților după albire — caz real North Dent, Râmnicu Vâlcea",
      note: "Caz real. Rezultatele diferă de la o persoană la alta.",
    },

    includes: [
      {
        title: "Evaluare inițială",
        description:
          "Verificăm sănătatea dinților și a gingiilor și stabilim dacă albirea este potrivită pentru tine.",
      },
      {
        title: "Ședință de albire",
        description:
          "Aplicăm procedura de albire adaptată ție, într-un mod controlat și confortabil.",
      },
      {
        title: "Recomandări de menținere",
        description:
          "Îți explicăm cum să păstrezi rezultatul cât mai mult, în funcție de obiceiurile tale.",
      },
    ],

    trustPoints: [
      "Evaluare înainte de procedură",
      "Programare rapidă pe WhatsApp",
      "Cabinet modern în Zona Nord",
    ],

    reviewAuthors: ["Maria Daiana Trifu", "Diana Dumitrescu", "Rosianu Silviu"],

    whatsappMessage:
      "Bună ziua! Vreau să profit de oferta de Albire dentară la 699 lei. Când aveți loc?",

    faqs: [
      {
        question: "Cât rezistă albirea?",
        answer:
          "Depinde de obiceiuri (cafea, ceai, tutun) și de igiena de acasă. Îți dăm recomandări pentru a păstra rezultatul cât mai mult.",
      },
      {
        question: "Albirea afectează dinții?",
        answer:
          "Realizată sub supravegherea medicului, după o evaluare prealabilă, albirea este o procedură controlată. Poate apărea o sensibilitate temporară, care în general trece.",
      },
      {
        question: "Cum profit de ofertă?",
        answer:
          "Scrie-ne pe WhatsApp și îți propunem cel mai apropiat interval disponibil, în limita perioadei ofertei.",
      },
    ],

    finePrint:
      "Ofertă valabilă până la 10 iulie 2026, în limita locurilor disponibile. Albirea se face după o evaluare prealabilă; dacă este nevoie de o igienizare în prealabil, îți spunem la consultație. Rezultatul depinde de la o persoană la alta.",
  },
];

const offerMap = new Map(offers.map((o) => [o.slug, o]));

/** Returnează oferta după slug (sau undefined). */
export function getOffer(slug: string): Offer | undefined {
  return offerMap.get(slug);
}

/** Toate slug-urile pentru getStaticPaths. */
export const offerSlugs: string[] = offers.map((o) => o.slug);

/** Imagine OG pentru share/preview — aceeași logică ca hero-ul vizibil pe pagină. */
export function getOfferOgImage(offer: Offer): string {
  const hero = offer.hero;
  if (hero?.type === "beforeAfter" && hero.ready) return hero.after;
  if (hero?.type === "image" && hero.ready !== false) return hero.src;
  return site.doctor.photo;
}

/** Alt text pentru og:image (potrivit imaginii alese mai sus). */
export function getOfferOgImageAlt(offer: Offer): string {
  const hero = offer.hero;
  if (hero?.type === "beforeAfter" && hero.ready) return hero.afterAlt;
  if (hero?.type === "image" && hero.ready !== false) return hero.alt;
  return site.doctor.photoAlt;
}
