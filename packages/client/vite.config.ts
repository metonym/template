import path from "node:path";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";
import type { UserConfig } from "vite";

export default {
  build: {
    emptyOutDir: true,
    outDir: "../server/dist",
  },
  plugins: [
    tailwindcss(),
    svelte({
      preprocess: vitePreprocess(),
    }),
  ],
  server: {
    proxy: {
      // Proxy /api requests to the backend server.
      // Removes the need for CORS in development.
      "/api": "http://localhost:3000",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@components": path.resolve("src/components"),
    },
  },
} satisfies UserConfig;
