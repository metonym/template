import adapter from "@sveltejs/adapter-static";
import { createConfig } from "sveldoc";

const config = await createConfig({
  name: "component-library-sveltekit",
  kit: {
    paths: {
      base: process.env.NODE_ENV === "production" ? "/component-library-sveltekit" : "",
    },
  },
  adapter: adapter(),
  files: {
    lib: "src",
    routes: "demo",
    template: "demo/_app.html",
  },
});

export default config;
