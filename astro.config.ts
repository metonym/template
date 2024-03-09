import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte, { vitePreprocess } from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { execSync } from "node:child_process";

const GIT_SHA = execSync("git rev-parse HEAD").toString().trim().slice(0, 7);

export default defineConfig({
  trailingSlash: "never",
  site: "https://astro.build/",
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },
  build: {
    assets: "_",
    format: "file",
  },
  vite: {
    define: {
      __SHA: JSON.stringify(GIT_SHA),
      __TS: JSON.stringify(new Date()),
    },
  },
  integrations: [
    svelte({
      preprocess: [vitePreprocess()],
    }),
    tailwind(),
    mdx(),
    sitemap(),
  ],
});
