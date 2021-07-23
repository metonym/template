import pkg from "./package.json";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { mdsvex } from "mdsvex";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      svelte({
        extensions: [".svelte", ".svx"],
        preprocess: [
          mdsvex(),
          {
            script: ({ content }) => {
              return {
                code: content.replace(
                  /process.env.VERSION/g,
                  JSON.stringify(pkg.version)
                ),
              };
            },
          },
        ],
      }),
    ],
    optimizeDeps: { exclude: Object.keys(pkg.dependencies || {}) },
    build: { minify: mode === "production" },
  };
});
