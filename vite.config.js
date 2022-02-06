import pkg from "./package.json";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";

export default defineConfig({
  base: "/repo-name/",
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
    ghPages(),
  ],
});
