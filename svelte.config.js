import fs from "fs";
import path from "path";
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

const pkg = JSON.parse(fs.readFileSync(new URL('package.json', import.meta.url), 'utf8'));

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
      resolve: {
        alias: {
          [pkg.name]: path.resolve('./src')
        }
      },
      server: {
        fs: {
          allow: [".."],
        },
      },
    },
  },
};

export default config;
