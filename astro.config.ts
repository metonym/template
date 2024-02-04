import mdx from "@astrojs/mdx";
import svelte, { vitePreprocess } from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { execSync } from "node:child_process";

const SITE_URL = process.env.SITE_URL ?? "https://astro.build/";
const GIT_SHA = execSync("git rev-parse HEAD").toString().trim().slice(0, 7);

export default defineConfig({
  site: SITE_URL,
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },
  srcDir: "./frontend",
  publicDir: "./frontend/public",
  build: {
    assets: "_",
    format: "directory",
  },
  vite: {
    define: {
      __SHA: JSON.stringify(GIT_SHA),
      __TS: JSON.stringify(new Date().toLocaleString()),
    },
    server: {
      proxy: {
        // Proxy /api requests to the backend server
        "/api": "http://localhost:3000",
      },
    },
  },
  integrations: [
    svelte({
      preprocess: [vitePreprocess()],
    }),
    tailwind(),
    mdx(),
  ],
});
