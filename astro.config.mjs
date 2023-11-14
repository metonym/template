import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [svelte()],
  srcDir: "./www",
  publicDir: "./www/public",
});
