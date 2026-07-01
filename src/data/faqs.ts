// Întrebări frecvente. Cele de pe homepage sunt marcate cu FAQPage schema
// DOAR pentru întrebările vizibile pe pagină.

export interface Faq {
  question: string;
  answer: string;
}

// FAQ scurt pentru homepage (5 întrebări) — vizibile și marcate cu schema.
export const homepageFaqs: Faq[] = [
  {
    question: "Cum mă programez la North Dent?",
    answer:
      "Cel mai simplu este să ne scrii pe WhatsApp la 0747 384 848. Îți răspundem și îți propunem un interval potrivit.",
  },
  {
    question: "Unde se află cabinetul?",
    answer:
      "Ne găsești în Zona Nord din Râmnicu Vâlcea, pe Str. Henri Coandă Nr.40, Bl.N14, Sc.A, Ap.1.",
  },
  {
    question: "Tratați și copii?",
    answer:
      "Da, ne ocupăm și de cei mici, cu răbdare și o abordare blândă, potrivită pentru copii.",
  },
  {
    question: "Sunt o persoană anxioasă. Cum mă puteți ajuta?",
    answer:
      "Îți explicăm fiecare pas și mergem în ritmul tău. Ne dorim ca fiecare pacient să se simtă ascultat și în siguranță.",
  },
  {
    question: "Faceți implanturi sau ortodonție?",
    answer:
      "În prezent nu oferim implanturi dentare sau ortodonție. Anumite cazuri chirurgicale sau ortodontice pot fi îndrumate discret către cabinete partenere.",
  },
];

// FAQ mai amplu pentru pagina /faq/.
export const generalFaqs: Faq[] = [
  ...homepageFaqs,
  {
    question: "Cât costă o consultație?",
    answer:
      "Prețurile sunt transparente: avem o listă de prețuri afișată în cabinet. Înainte de orice intervenție îți comunicăm costul estimat și stabilim împreună planul. Pentru o estimare personalizată, scrie-ne pe WhatsApp.",
  },
  {
    question: "Care este programul cabinetului?",
    answer:
      "Suntem deschiși de luni până joi, între 14:00 și 19:00. Vineri, sâmbătă și duminică suntem închisi.",
  },
  {
    question: "Pot plăti cu cardul?",
    answer: "Da. Acceptăm atât numerar, cât și plata cu cardul.",
  },
];
