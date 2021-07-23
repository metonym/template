const pkg = require("./package.json");

module.exports = {
  build: {
    lib: {
      entry: "src",
      name: pkg.name
        .split("-")
        .map((t) => t.slice(0, 1).toUpperCase() + t.slice(1))
        .join(""),
    },
    rollupOptions: {
      external: Object.keys(pkg.dependencies || {}),
    },
  },
};
