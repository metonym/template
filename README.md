# component-svelte

[![NPM][npm]][npm-url]

> component-svelte description

Rollup is used to support the ESM/UMD output formats ("module", "main" fields in `package.json`, respectively).

The "svelte" (uncompiled) entry is `src/index.js`.

<!-- REPO_URL -->

---

<!-- TOC -->

## Install

```bash
yarn add -D component-svelte
# OR
npm i -D component-svelte
```

## Usage

### Basic

<!-- prettier-ignore-start -->
```svelte
<script>
  import Component from "component-svelte";

  let count = 1;
</script>

<Component bind:count on:click />
```
<!-- prettier-ignore-end -->

## API

### Props

| Prop name | Value                   |
| :-------- | :---------------------- |
| count     | `number` (default: `0`) |

### Dispatched Events

None.

### Forwarded Events

- on:click

## TypeScript

Svelte version 3.31 or greater is required to use this component with TypeScript.

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/component-svelte.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/component-svelte
