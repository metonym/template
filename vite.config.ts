import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from "@vitejs/plugin-react";
import type { UserConfig } from "vite";

export default {
  plugins: [tailwindcss(),TanStackRouterVite({ target: 'react', autoCodeSplitting: true }), react()],
} satisfies UserConfig;
