# component-svelte

[![NPM][npm]][npm-url]

> Template for developing a Svelte component.

Rollup is used to support the ESM/UMD output formats ("module", "main" fields in `package.json`, respectively).

The "svelte" (uncompiled) entry is `src/index.js`.

<!-- TOC -->

## Quick Start

```sh
npx degit metonym/template#component-svelte svelte-component
cd svelte-component
yarn
```

## Usage

<!-- prettier-ignore-start -->
```svelte
<script>
  import Component from "component-svelte";

  let count = 1;
</script>

<Component bind:count on:click />
```
<!-- prettier-ignore-end -->

## Available Scripts

### `yarn dev`

README-driven development.

### `yarn deploy`

Build and deploy the documentation for GitHub Pages.

### `yarn prepack`

Builds the component for production at the publish step.

### `yarn svelte-check`

Runs `svelte-check` to validate the TypeScript definitions.

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/component-svelte.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/component-svelte
