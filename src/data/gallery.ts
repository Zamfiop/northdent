// Galerie foto — sursă unică pentru /galerie/.
// Fișierele din /public/images/galerie/ pot avea denumiri SEO; textele alt
// descriu onest scena (cabinet, medic, tratament), fără a presupune conținutul exact.

export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/galerie/cabinet-stomatologic.webp",
    alt: "Cabinet stomatologic North Dent în Râmnicu Vâlcea",
  },
  {
    src: "/images/galerie/dentist-valcea-cabinet.webp",
    alt: "Interior cabinet stomatologic North Dent, Zona Nord Râmnicu Vâlcea",
  },
  {
    src: "/images/galerie/dr-laura-maria-zamfirescu-dentist-valcea.webp",
    alt: "Dr. Zamfirescu Laura-Maria, medic stomatolog North Dent, Râmnicu Vâlcea",
  },
  {
    src: "/images/galerie/cabinet-stomatologic-valcea-pacient-informat.webp",
    alt: "Consultație stomatologică la North Dent, Râmnicu Vâlcea",
  },
  {
    src: "/images/galerie/cabinet-stomatologic-valcea-detartraj.webp",
    alt: "Sală de tratament North Dent, cabinet stomatologic Râmnicu Vâlcea",
  },
  {
    src: "/images/galerie/albire-profesionala-valcea.webp",
    alt: "Cabinet stomatologic North Dent în Râmnicu Vâlcea — îngrijire dentară",
  },
  {
    src: "/images/galerie/cabinet-stomatologic-radiografie.webp",
    alt: "Echipament stomatologic la North Dent, Râmnicu Vâlcea",
  },
  {
    src: "/images/galerie/radiografie-cabinet-stomatologic.webp",
    alt: "Cabinet stomatologic modern North Dent, Râmnicu Vâlcea",
  },
  {
    src: "/images/galerie/interpretare-radiografie-dentist-valcea.webp",
    alt: "Medic stomatolog la North Dent, Râmnicu Vâlcea",
  },
];
