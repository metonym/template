const pkg = require("./package.json");
const { svelte } = require("@sveltejs/vite-plugin-svelte");
const { defineConfig } = require("vite");
const { mdsvex } = require("mdsvex");

module.exports = defineConfig(({ mode }) => {
  return {
    plugins: [
      svelte({
        extensions: [".svelte", ".svx"],
        preprocess: [
          mdsvex(),
          {
            script: ({ content }) => {
              return {
                code: content.replace(
                  /process.env.VERSION/g,
                  JSON.stringify(pkg.version)
                ),
              };
            },
          },
        ],
      }),
    ],
    optimizeDeps: { exclude: Object.keys(pkg.dependencies || {}) },
    build: { minify: mode === "production" },
  };
});
