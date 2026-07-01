// Structură tehnică pentru blog. NU este promovat în navigația principală în
// prima versiune. Adaugă articole aici când blogul devine activ.

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  /** Data publicării, format ISO */
  date: string;
  /** Conținut HTML sau text. TODO: definește strategia finală de conținut. */
  body: string;
}

// Momentan nu există articole publicate.
export const blogPosts: BlogPost[] = [];
