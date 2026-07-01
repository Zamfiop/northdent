// Structura de navigație. Blogul NU este promovat în navigația principală
// în prima versiune (există doar ca structură tehnică).

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Acasă", href: "/" },
  { label: "Servicii", href: "/servicii/" },
  { label: "Medici", href: "/medici/" },
  { label: "Despre cabinet", href: "/despre-cabinet/" },
  { label: "Recenzii", href: "/recenzii/" },
  { label: "Contact", href: "/contact/" },
];

// Linkuri secundare pentru footer (pagini utile care nu sunt în nav principal).
export const secondaryNav: NavItem[] = [
  { label: "Galerie", href: "/galerie/" },
  { label: "Întrebări frecvente", href: "/faq/" },
];

export const legalNav: NavItem[] = [
  { label: "Politică de confidențialitate", href: "/politica-de-confidentialitate/" },
  { label: "Politică cookies", href: "/politica-cookies/" },
  { label: "Termeni și condiții", href: "/termeni-si-conditii/" },
];
