// Date centralizate despre business. Sursă unică de adevăr pentru contact,
// program, schema JSON-LD și SEO.

export interface OpeningHour {
  /** Cheie zi în engleză pentru schema.org */
  dayOfWeek:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  /** Etichetă afișată în română */
  label: string;
  /** Format HH:MM sau null dacă e închis */
  opens: string | null;
  closes: string | null;
}

// TODO: Programul este TEMPORAR și se va schimba curând. Actualizează aici.
export const openingHours: OpeningHour[] = [
  { dayOfWeek: "Monday", label: "Luni", opens: "10:00", closes: "18:00" },
  { dayOfWeek: "Tuesday", label: "Marți", opens: "10:00", closes: "18:00" },
  { dayOfWeek: "Wednesday", label: "Miercuri", opens: "10:00", closes: "18:00" },
  { dayOfWeek: "Thursday", label: "Joi", opens: "10:00", closes: "18:00" },
  { dayOfWeek: "Friday", label: "Vineri", opens: "10:00", closes: "18:00" },
  { dayOfWeek: "Saturday", label: "Sâmbătă", opens: null, closes: null },
  { dayOfWeek: "Sunday", label: "Duminică", opens: null, closes: null },
];

const phoneDigits = "40747384848";

export const site = {
  brand: "North Dent",
  legalName: "CUANTIC DENT SRL",
  url: "https://northdent.ro",

  doctor: {
    name: "Dr. Zamfirescu Laura-Maria",
    title: "Medic stomatolog",
    slug: "dr-zamfirescu-laura-maria",
    photo: "/images/galerie/dr-laura-maria-zamfirescu-dentist-valcea.webp",
    photoAlt: "Dr. Zamfirescu Laura-Maria, medic stomatolog North Dent, Râmnicu Vâlcea",
  },

  cabinet: {
    photo: "/images/galerie/cabinet-stomatologic.webp",
    photoAlt: "Cabinet stomatologic North Dent în Râmnicu Vâlcea",
  },

  // Contact
  phoneDisplay: "0747 384 848",
  phoneHref: "+40747384848",
  // Acțiunea principală de conversie: mesaj pe WhatsApp
  whatsappUrl: "https://wa.me/40747384848",
  whatsappDigits: phoneDigits,
  email: "contact@northdent.ro",
  emailHref: "mailto:contact@northdent.ro",

  // Adresă
  address: {
    streetAddress: "Str. Henri Coanda Nr.40, Bl.N14, Sc.A, Ap.1",
    addressLocality: "Ramnicu Valcea",
    addressRegion: "Vâlcea",
    postalCode: "",
    addressCountry: "RO",
    areaLabel: "Zona Nord, Râmnicu Vâlcea",
  },
  areaServed: "Râmnicu Vâlcea",

  // Hărți / Google Business Profile
  mapsUrl: "https://maps.app.goo.gl/xTokLoemcPu3EQgP7",
  // TODO: adaugă embed URL real Google Maps (iframe) când e disponibil.
  mapsEmbedUrl: "",

  // Imagini — logo-uri locale în /public/images/logo/
  logo: {
    wide: "/images/logo/logo-wide.svg",
    wideWhite: "/images/logo/logo-wide-white.svg",
    square: "/images/logo/logo-square.svg",
    squareWhite: "/images/logo/logo-square-white.svg",
  },

  // Rețele / profiluri (pentru sameAs). Google Maps profile e potrivit aici.
  sameAs: ["https://maps.app.goo.gl/xTokLoemcPu3EQgP7"],

  openingHours,
} as const;

export type Site = typeof site;

/** Construiește un link WhatsApp cu mesaj precompletat opțional. */
export function whatsappLink(prefilledMessage?: string): string {
  if (!prefilledMessage) return site.whatsappUrl;
  return `${site.whatsappUrl}?text=${encodeURIComponent(prefilledMessage)}`;
}

/** Text lizibil pentru programul complet. */
export function formatOpeningHours(): { label: string; value: string }[] {
  return openingHours.map((h) => ({
    label: h.label,
    value: h.opens && h.closes ? `${h.opens}–${h.closes}` : "Închis",
  }));
}
