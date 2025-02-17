import path from "node:path";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
import { defineConfig } from "astro/config";
import pkg from "./package.json";

export default defineConfig({
  outDir: "dist",
  integrations: [
    svelte({
      compilerOptions: { runes: true },
    }),
    mdx(),
  ],
  srcDir: "./www",
  publicDir: "./www/public",
  vite: {
    resolve: {
      alias: {
        [pkg.name]: path.resolve("./src"),
      },
    },
  },
});
