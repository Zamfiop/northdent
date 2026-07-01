// Recenzii afișate pe homepage și pe /recenzii/.
// IMPORTANT: NU folosim Review / AggregateRating schema pentru North Dent
// (evităm markup self-serving pentru LocalBusiness).
//
// Recenzii REALE preluate din Google Business Profile (transcrise din capturi).
// Sursă: profilul Google North Dent. Nu se inventează recenzii.

export interface Review {
  authorName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  source: "Google";
  /** Format liber, ex. "Mai 2025" */
  date?: string;
  /** Inițiale pentru avatar placeholder */
  initials?: string;
}

export const reviews: Review[] = [
  {
    authorName: "Maria Daiana Trifu",
    rating: 5,
    text: "O recomand pe Doamna Doctor Zamfirescu cu toată încrederea. O profesionistă foarte bună și o fire foarte calmă. De fiecare dată când am fost la ea a avut răbdare să îmi explice și să îmi calmeze frica de dentist. Un medic foarte competent.",
    source: "Google",
    initials: "MT",
  },
  {
    authorName: "Diana Dumitrescu",
    rating: 5,
    text: "Un medic de excepție, atentă la detalii, comunicativă, dând dovadă de o mare dăruire profesională! Recomand!",
    source: "Google",
    initials: "DD",
  },
  {
    authorName: "Rosianu Silviu",
    rating: 5,
    text: "Super locație! Totul profesional și curat. Doctor cu experiență, atent la detalii. Recomand cu încredere!",
    source: "Google",
    initials: "RS",
  },
  {
    authorName: "Ion's Vlog",
    rating: 5,
    text: "Mi-am făcut detartraj cu periaj și toate cele; au trecut 2 luni și încă sunt mulțumit, mai ales că medicul a reușit să îmi bage mințile în cap și acum mă spăl pe dinți după aproape fiecare masă; în plus de asta, ce să crezi, m-am dat și pe ață dentară!",
    source: "Google",
    initials: "IV",
  },
  {
    authorName: "Vasi G",
    rating: 5,
    text: "Pot spune că mi-am găsit noul medic dentist!",
    source: "Google",
    initials: "VG",
  },
  {
    authorName: "Luiza Năstăsoiu",
    rating: 5,
    text: "Recomand!",
    source: "Google",
    initials: "LN",
  },
];
