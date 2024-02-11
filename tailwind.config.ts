import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./client/**/*.{svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
