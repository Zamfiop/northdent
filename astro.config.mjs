// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { services } from "./src/data/services.ts";

// North Dent - static site, Cloudflare Pages ready.
// Build command: npm run build | Output directory: dist

/** Redirecturi /en/servicii/<slug> pentru dev + fallback HTML la build static */
const legacyEnServiciiRedirects = Object.fromEntries(
  services.map((s) => [`/en/servicii/${s.slug}`, `/servicii/${s.slug}/`]),
);

export default defineConfig({
  site: "https://northdent.ro",
  output: "static",
  trailingSlash: "always",
  // Aceleași reguli ca în public/_redirects — funcționează în `npm run dev` / preview.
  redirects: {
    "/en": "/",
    "/en/servicii": "/servicii/",
    ...legacyEnServiciiRedirects,
  },
  integrations: [
    sitemap({
      // Blog is prepared technically but not promoted in the primary nav yet.
      // /oferta/ are landing/funnel pages for paid ads: noindex + not in sitemap.
      filter: (page) => !page.includes("/blog/") && !page.includes("/oferta/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
