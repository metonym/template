# template

> Collection of templates for quick project scaffolding.

These are some templates that I frequently use to scaffold new projects.

Use [degit](https://github.com/Rich-Harris/degit) to copy the template:

```sh
npx degit metonym/template#<branch> <project-name>
cd <project-name> && yarn install
```

Example using the `typescript` template:

```sh
npx degit metonym/template#typescript typescript
cd typescript
yarn
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
npx degit metonym/template#typescript template
cd template && yarn
```

### Generic library

- **[typescript-lib](https://github.com/metonym/template/tree/typescript-lib)**: The same as the `typescript` template but with additional npm publishing metadata.

```sh
npx degit metonym/template#typescript-lib my-typescript-lib
cd template && yarn
```

- **[rollup-lib](https://github.com/metonym/template/tree/rollup-lib)**: Bundle projects with Rollup to support CJS, ES, UMD output formats.

```sh
npx degit metonym/template#rollup-lib my-rollup-lib
cd template && yarn
```

### Components

- **[component-svelte](https://github.com/metonym/template/tree/component-svelte)**: Develop Svelte components with support for UMD/ESM/uncompiled Svelte formats.

```sh
npx degit metonym/template#component-svelte svelte-component
cd template && yarn
```

### Plugins

- **[plugin-posthtml](https://github.com/metonym/template/tree/plugin-posthtml)**: Develop PostHTML plugins written in TypeScript.

```sh
npx degit metonym/template#plugin-posthtml posthtml-template
cd template && yarn
```

- **[plugin-postcss](https://github.com/metonym/template/tree/plugin-postcss)**: Develop PostCSS plugins written in TypeScript.

```sh
npx degit metonym/template#plugin-postcss postcss-template
cd template && yarn
```

### Web apps

- **[webpack-svelte](https://github.com/metonym/template/tree/webpack-svelte)**: Build Svelte apps with webpack.

```sh
npx degit metonym/template#webpack-svelte my-webpack-svelte-app
cd template && yarn
```

- **[webpack-svelte-lite](https://github.com/metonym/template/tree/webpack-svelte-lite)**: Based on `webpack-svelte`, except CSS is not emitted to a separate file.

```sh
npx degit metonym/template#webpack-svelte-lite my-webpack-svelte-lite-app
cd template && yarn
```

- **[rollup-svelte](https://github.com/metonym/template/tree/rollup-svelte)**: Build Svelte apps with Rollup.

```sh
npx degit metonym/template#rollup-svelte my-rollup-svelte-app
cd template && yarn
```

- **[svite](https://github.com/metonym/template/tree/svite)**: Build Svelte apps with svite.

```sh
npx degit metonym/template#svite my-svite-app
cd template && yarn
```

## License

[MIT](LICENSE)
