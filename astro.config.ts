import mdx from "@astrojs/mdx";
import svelte, { vitePreprocess } from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { execSync } from "node:child_process";

export default defineConfig({
  vite: {
    define: {
      "process.env.SHA": JSON.stringify(
        execSync("git rev-parse HEAD").toString().trim().slice(0, 7),
      ),
      "process.env.TS": JSON.stringify(new Date()),
    },
  },
  build: {
    assets: "assets",
  },
  integrations: [
    svelte({
      preprocess: [vitePreprocess()],
    }),
    tailwind(),
    mdx(),
  ],
});
