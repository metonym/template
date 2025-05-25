import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";

export default {
  plugins: [tailwindcss(), react()],
} satisfies UserConfig;
