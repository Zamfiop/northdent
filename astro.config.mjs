// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// North Dent - static site, Cloudflare Pages ready.
// Build command: npm run build | Output directory: dist

export default defineConfig({
  site: "https://northdent.ro",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      // Blog is prepared technically but not promoted in the primary nav yet.
      // /oferta/ are landing/funnel pages for paid ads: noindex + not in sitemap.
      filter: (page) =>
        !page.includes("/blog/") &&
        !page.includes("/oferta/") &&
        !page.includes("/en/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
