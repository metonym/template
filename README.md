# svelte-preprocess-name

> Svelte preprocessor

## Installation

```bash
# NPM
npm i -D svelte-preprocess-name

# pnpm
pnpm i -D svelte-preprocess-name

# Yarn
yarn add -D svelte-preprocess-name

# Bun
bun add -D svelte-preprocess-name
```

## Usage

```js
// svelte.config.js
import { defineConfig } from "vite";
import { name } from "svelte-preprocess-name";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocessors: [name()],
};
```

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)
