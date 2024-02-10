import type { Config } from "tailwindcss";

export default {
  content: ["./client/**/*.{astro,html,md,mdx,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
