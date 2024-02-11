import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";
import type { UserConfig } from "vite";

export default {
  plugins: [
    svelte({
      preprocess: vitePreprocess(),
    }),
  ],
  define: {
    __TS: JSON.stringify(new Date().toLocaleString()),
  },
  server: {
    proxy: {
      // Proxy /api requests to the backend server.
      // Removes the need for CORS in development.
      "/api": "http://localhost:3000",
    },
  },
  resolve: {
    alias: {
      "@client": path.resolve("client"),
      "@components": path.resolve("client/components"),
    },
  },
} satisfies UserConfig;
