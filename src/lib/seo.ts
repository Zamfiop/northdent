import { site } from "@/data/site";

export interface SeoInput {
  title: string;
  description: string;
  /** Path relativ (ex. "/servicii/detartraj/") pentru canonical */
  path: string;
  /** Imagine Open Graph absolută sau relativă */
  image?: string;
  /** Tip Open Graph */
  ogType?: "website" | "article";
  /** true => noindex,nofollow (implicit paginile publice sunt indexabile) */
  noindex?: boolean;
}

export interface ResolvedSeo {
  title: string;
  description: string;
  canonical: string;
  image: string;
  ogType: "website" | "article";
  robots: string;
  locale: string;
  siteName: string;
}

const DEFAULT_OG_IMAGE = "/images/og-default.jpg"; // TODO: adaugă imagine OG reală

/** Normalizează un path la forma absolută cu trailing slash. */
export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return new URL(clean, site.url).href;
}

export function resolveSeo(input: SeoInput): ResolvedSeo {
  const image = input.image ?? DEFAULT_OG_IMAGE;
  return {
    title: input.title,
    description: input.description,
    canonical: absoluteUrl(input.path),
    image: image.startsWith("http") ? image : absoluteUrl(image),
    ogType: input.ogType ?? "website",
    robots: input.noindex ? "noindex,nofollow" : "index,follow",
    locale: "ro_RO",
    siteName: site.brand,
  };
}
