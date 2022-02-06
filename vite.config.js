import pkg from "./package.json";

export default {
  build: {
    lib: {
      entry: "src",
      name: 'ViteLib',
    },
    rollupOptions: {
      external: Object.keys(pkg.dependencies || {}),
    },
  },
};
