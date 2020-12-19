# component-svelte

> Template for developing a Svelte component.

Rollup is used to support the ESM/UMD output formats ("module", "main" fields in `package.json`, respectively).

The "svelte" (uncompiled) entry is `src/index.js`.

## Quick Start

```sh
npx degit metonym/template#component-svelte svelte-component
cd svelte-component
yarn
```

## Usage

```svelte
<script>
  import Component from "component-svelte";

  let count = 1;
</script>

<Component bind:count on:click />
```

## Available Scripts

### `yarn prepack`

Builds the component for production at the publish step.

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)
