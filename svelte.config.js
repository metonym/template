import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [preprocess(), mdsvex({ extensions: [".md"] })],
  kit: {
    adapter: adapter(),
    target: "#svelte",
    files: {
      lib: "src",
      routes: "demo",
      template: "demo/_app.html",
    },
    vite: {
      server: {
        fs: {
          allow: [".."],
        },
      },
    },
  },
};

export default config;
