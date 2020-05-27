# template

> Collection of templates for quick project scaffolding.

Each template exists in a dedicated branch.

Use [degit](https://github.com/Rich-Harris/degit) to copy to repository:

```sh
npx degit metonym/template#<branch> <project-name>
cd <project-name>
yarn
```

## Templates

### General purpose

- **[typescript](https://github.com/metonym/template/tree/typescript)**: Write projects in TypeScript. Uses `ts-node-dev` for fast compiling and the native Node.js `assert` library for testing.

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
