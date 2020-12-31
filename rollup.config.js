import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import { typescript } from 'svelte-preprocess-esbuild';

const PROD = !process.env.ROLLUP_WATCH;
const PORT = parseInt(process.env.PORT, 10) || 3000;
const PUBLIC = 'public';

export default {
  input: "src/index.ts",
  output: {
    sourcemap: !PROD,
    format: "iife",
    name: "app",
    file: `${PUBLIC}/build/bundle.js`,
  },
  plugins: [
    svelte({
      preprocess: [
        typescript({
          target: 'es2020'
        }),
      ],
      emitCss: false,
      compilerOptions: {
        dev: !PROD,
        immutable: true
      }
    }),
    resolve(),
    commonjs(),
    !PROD &&
    serve({
      contentBase: [PUBLIC],
      port: PORT,
    }),
    !PROD && livereload({ watch: PUBLIC }),
    PROD && terser(),
  ],
};
