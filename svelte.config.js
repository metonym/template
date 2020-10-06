const { mdsvex } = require("mdsvex");
const pkg = require("./package.json");

module.exports = {
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
};
