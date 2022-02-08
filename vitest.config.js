import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import config from "./svelte.config.js";

export default defineConfig({
  resolve: config.kit.vite.resolve,
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    globals: true,
    environment: "jsdom",
  },
});