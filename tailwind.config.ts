import type { Config } from "tailwindcss";

export default {
  content: ["./frontend/**/*.{astro,html,md,mdx,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
