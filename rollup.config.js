import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

const IS_PROD = !process.env.ROLLUP_WATCH;

export default (async () => {
  return [
    {
      input: "src/index.js",
      output: { file: pkg.browser, format: "umd", name: pkg.name },
      plugins: [
        resolve(),
        IS_PROD && (await import("rollup-plugin-terser")).terser(),
      ],
    },
    {
      input: "src/index.js",
      output: [
        { file: pkg.main, format: "cjs" },
        { file: pkg.module, format: "es" },
      ],
      plugins: [resolve()],
    },
  ];
})();
