import pkg from "./package.json";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      svelte({
        extensions: [".svelte"],
        preprocess: [
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
  };
});
