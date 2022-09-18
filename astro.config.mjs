import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [svelte(), sitemap(), prefetch()],
  trailingSlash: "always"
});