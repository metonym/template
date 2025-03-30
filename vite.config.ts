import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import type { UserConfig } from "vite";

export default {
  plugins: [
    tailwindcss(),
    svelte({
      preprocess: vitePreprocess(),
    }),
  ],
} satisfies UserConfig;
