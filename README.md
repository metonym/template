# template

> Collection of templates for quick project scaffolding.

These are some templates that I frequently use to scaffold new projects. Having templates exist on dedicated branches in a single repository makes it easier to maintain and document.

Use [degit](https://github.com/Rich-Harris/degit) to copy the template:

```sh
npx degit metonym/template#<branch> <project-name>
cd <project-name>
yarn
```

Currently, there are five categories of templates:

1. general purpose (prototyping)
2. generic library (intended to be published to npm)
3. library/framework-specific components
4. plugins
5. web apps

- General purpose, library and plugin templates use the native Node.js assertion module for testing. They also have a "prepack" script defined for building the library before publishing to npm.

- Web app templates start off with only development/build scripts in order to be as light as possible.

## Templates

### General purpose

- **[typescript](https://github.com/metonym/template/tree/typescript)**: Write projects in TypeScript. Uses `ts-node-dev` for fast compiling and the native Node.js `assert` library for testing.

### Generic library

- **[typescript-lib](https://github.com/metonym/template/tree/typescript-lib)**: The same as the `typescript` template but with additional npm publishing metadata.

- **[rollup-lib](https://github.com/metonym/template/tree/rollup-lib)**: Bundle projects with Rollup to support CJS, ES, UMD output formats.

### Components

- **[component-svelte](https://github.com/metonym/template/tree/component-svelte)**: Develop Svelte components with support for UMD/ESM/uncompiled Svelte formats.

### Plugins

- **[plugin-posthtml](https://github.com/metonym/template/tree/plugin-posthtml)**: Develop PostHTML plugins written in TypeScript.

- **[plugin-postcss](https://github.com/metonym/template/tree/plugin-postcss)**: Develop PostCSS plugins written in TypeScript.

### Web apps

- **[webpack-svelte](https://github.com/metonym/template/tree/webpack-svelte)**: Build Svelte apps with webpack.

- **[rollup-svelte](https://github.com/metonym/template/tree/rollup-svelte)**: Build Svelte apps with Rollup.

## License

[MIT](LICENSE)
