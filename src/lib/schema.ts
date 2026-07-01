import { site, openingHours } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";
import type { Faq } from "@/data/faqs";

// Helpers pentru JSON-LD. Fiecare funcție întoarce un obiect simplu care va fi
// serializat de componenta JsonLd.astro.
//
// IMPORTANT: NU generăm Review sau AggregateRating pentru North Dent
// (evităm markup self-serving pentru LocalBusiness).

type JsonLdObject = Record<string, unknown>;

const businessId = `${site.url}/#business`;
const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

function postalAddress(): JsonLdObject {
  const address: JsonLdObject = {
    "@type": "PostalAddress",
    streetAddress: site.address.streetAddress,
    addressLocality: site.address.addressLocality,
    addressRegion: site.address.addressRegion,
    addressCountry: site.address.addressCountry,
  };
  if (site.address.postalCode) {
    address.postalCode = site.address.postalCode;
  }
  return address;
}

function openingHoursSpecification(): JsonLdObject[] {
  return openingHours
    .filter((h) => h.opens && h.closes)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.dayOfWeek}`,
      opens: h.opens,
      closes: h.closes,
    }));
}

/** Dentist / LocalBusiness / MedicalBusiness pentru North Dent. */
export function dentistSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    "@id": businessId,
    name: site.brand,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phoneHref,
    email: site.email,
    image: absoluteUrl(site.logo.wide),
    logo: absoluteUrl(site.logo.wide),
    address: postalAddress(),
    areaServed: {
      "@type": "City",
      name: site.areaServed,
    },
    medicalSpecialty: "Dentistry",
    openingHoursSpecification: openingHoursSpecification(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    sameAs: site.sameAs,
    hasMap: site.mapsUrl,
  };
}

/** Organization pentru firma legală. */
export function organizationSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: site.brand,
    legalName: site.legalName,
    url: site.url,
    logo: absoluteUrl(site.logo.wide),
    email: site.email,
    telephone: site.phoneHref,
    sameAs: site.sameAs,
  };
}

/** WebSite pentru întreg site-ul. */
export function websiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.brand,
    inLanguage: "ro-RO",
    publisher: { "@id": orgId },
  };
}

/** Person pentru medic + legătură la cabinet. */
export function personSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.doctor.name,
    jobTitle: site.doctor.title,
    url: absoluteUrl(`/${site.doctor.slug}/`),
    image: absoluteUrl(site.doctor.photo),
    worksFor: { "@id": businessId },
  };
}

export interface BreadcrumbEntry {
  name: string;
  /** Path relativ */
  path: string;
}

/** BreadcrumbList din intrări nume/path. */
export function breadcrumbSchema(entries: BreadcrumbEntry[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: absoluteUrl(entry.path),
    })),
  };
}

/** FAQPage DOAR pentru întrebările vizibile pe pagină. */
export function faqSchema(faqs: Faq[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
