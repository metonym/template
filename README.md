# template

> Collection of templates for quick project scaffolding.

These are some templates that I frequently use to scaffold new projects.

Use [degit](https://github.com/Rich-Harris/degit) to copy the template:

```sh
npx degit metonym/template#<branch> <project-name>
cd <project-name> && yarn
```

Example using the `typescript` template:

```sh
npx degit metonym/template#typescript typescript
cd typescript && yarn
```

There are five categories of templates:

1. general purpose (prototyping)
2. generic library (intended to be published to npm)
3. library/framework-specific components
4. plugins
5. web apps

General purpose, library and plugin templates use the native Node.js assertion module for testing. They also have a "prepack" script defined for building the library before publishing to npm. Web app templates start off with only development/build scripts in order to be as light as possible.

## Templates

### General purpose

- **[typescript](https://github.com/metonym/template/tree/typescript)**: Write projects in TypeScript. Uses `ts-node-dev` for fast compiling and the native Node.js `assert` library for testing.

```sh
npx degit metonym/template#typescript typescript
cd typescript && yarn
```

### Generic library

- **[vite-lib](https://github.com/metonym/template/tree/vite-lib)**: Template for developing libraries using [vite](https://github.com/vitejs/vite).

```sh
npx degit metonym/template#vite-lib my-vite-lib
cd my-vite-lib && yarn
```

- **[esbuild-lib](https://github.com/metonym/template/tree/esbuild-lib)**: Template for developing libraries using [esbuild](https://github.com/evanw/esbuild).

```sh
npx degit metonym/template#esbuild-lib my-esbuild-lib
cd my-esbuild-lib && yarn
```

- **[typescript-lib](https://github.com/metonym/template/tree/typescript-lib)**: The same as the `typescript` template but with additional npm publishing metadata.

```sh
npx degit metonym/template#typescript-lib my-typescript-lib
cd my-typescript-lib && yarn
```

- **[bun-lib](https://github.com/metonym/template/tree/bun-lib)**: The same as the `bun-lib` template but using Bun instead of Yarn/Vitest.

```sh
npx degit metonym/template#bun-lib my-bun-lib
cd my-bun-lib && yarn
```

- **[rollup-lib](https://github.com/metonym/template/tree/rollup-lib)**: Bundle projects with Rollup to support CJS, ES, UMD output formats.

```sh
npx degit metonym/template#rollup-lib my-rollup-lib
cd my-rollup-lib && yarn
```

### Components

- **[component-svelte](https://github.com/metonym/template/tree/component-svelte)**: Develop Svelte components using a "README-driven development" approach with Rollup.

```sh
npx degit metonym/template#component-svelte svelte-component
cd svelte-component && yarn
```

- **[component-sveltekit](https://github.com/metonym/template/tree/component-sveltekit)**: Develop Svelte components using a "README-driven development" approach with SvelteKit.

```sh
npx degit metonym/template#component-sveltekit svelte-component
cd svelte-component && yarn
```

- **[component-library-sveltekit](https://github.com/metonym/template/tree/component-library-sveltekit)**: Develop Svelte components using a "README-driven development" approach with SvelteKit.

```sh
npx degit metonym/template#component-library-sveltekit svelte-component
cd svelte-component && yarn
```

- **[vite-lib-svelte](https://github.com/metonym/template/tree/vite-lib-svelte)**: Template for developing Svelte component libraries using [vite](https://github.com/vitejs/vite).

```sh
npx degit metonym/template#vite-lib-svelte my-vite-lib-svelte
cd my-vite-lib-svelte && yarn
```

### Plugins

- **[vite-plugin](https://github.com/metonym/template/tree/vite-plugin)**: Template for developing plugins for [vite](https://github.com/vitejs/vite).

```sh
npx degit metonym/template#vite-plugin vite-plugin
cd vite-plugin && yarn
```

- **[plugin-posthtml](https://github.com/metonym/template/tree/plugin-posthtml)**: Develop PostHTML plugins written in TypeScript. Test using vitest.

```sh
npx degit metonym/template#plugin-posthtml posthtml-template
cd posthtml-template && yarn
```

- **[plugin-postcss](https://github.com/metonym/template/tree/plugin-postcss)**: Develop PostCSS plugins written in TypeScript.

```sh
npx degit metonym/template#plugin-postcss postcss-template
cd postcss-template && yarn
```

- **[svelte-preprocessor](https://github.com/metonym/template/tree/svelte-preprocessor)**: Develop Svelte preprocessors using TypeScript and vitest.

```sh
npx degit metonym/template#svelte-preprocessor svelte-preprocess-name
cd svelte-preprocess-name && yarn
```

- **[svelte-preprocess-bun](https://github.com/metonym/template/tree/svelte-preprocess-bun)**: Develop Svelte preprocessors using TypeScript and bun.

```sh
npx degit metonym/template#svelte-preprocess-bun svelte-preprocess-name
cd svelte-preprocess-name && yarn
```

### Web apps

- **[astro-svelte](https://github.com/metonym/template/tree/astro-svelte)**: Build static sites with Astro and Svelte.

```sh
npx degit metonym/template#astro-svelte my-astro-svelte-app
cd my-astro-svelte-app && yarn
```

- **[webpack-svelte](https://github.com/metonym/template/tree/webpack-svelte)**: Build Svelte apps with webpack.

```sh
npx degit metonym/template#webpack-svelte my-webpack-svelte-app
cd my-webpack-svelte-app && yarn
```

- **[webpack-svelte-lite](https://github.com/metonym/template/tree/webpack-svelte-lite)**: Based on `webpack-svelte`, except CSS is not emitted to a separate file.

```sh
npx degit metonym/template#webpack-svelte-lite my-webpack-svelte-lite-app
cd my-webpack-svelte-lite-app && yarn
```

- **[rollup-svelte](https://github.com/metonym/template/tree/rollup-svelte)**: Build Svelte apps with Rollup.

```sh
npx degit metonym/template#rollup-svelte my-rollup-svelte-app
cd my-rollup-svelte-app && yarn
```

- **[svite](https://github.com/metonym/template/tree/svite)**: Build Svelte apps with svite and MDsveX.

```sh
npx degit metonym/template#svite my-svite-app
cd my-svite-app && yarn
```

- **[vite-svelte](https://github.com/metonym/template/tree/vite-svelte)**: Build Svelte apps with Vite.

```sh
npx degit metonym/template#vite-svelte my-vite-svelte-app
cd my-vite-svelte-app && yarn
```

- **[vite-svelte-tailwind](https://github.com/metonym/template/tree/vite-svelte-tailwind)**: Build Svelte apps with Vite and Tailwind.

```sh
npx degit metonym/template#vite-svelte-tailwind my-vite-svelte-app
cd my-vite-svelte-app && npm i
```

- **[sveltekit-static](https://github.com/metonym/template/tree/sveltekit-static)**: Build static Svelte apps with SvelteKit and MDSveX.

```sh
npx degit metonym/template#sveltekit-static my-sveltekit-static-app
cd my-sveltekit-static-app && yarn
```

## License

[MIT](LICENSE)
