# component-sveltekit

[![NPM][npm]][npm-url]

> Svelte component description

## Installation

```bash
# Yarn
yarn add -D component-sveltekit

# NPM
npm i -D component-sveltekit

# pnpm
pnpm i -D component-sveltekit
```

## Usage

### Basic

<!-- example-start demo/Basic.svelte -->

```svelte
<script>
  import { Button } from "component-sveltekit";

  let count = 0;
</script>

<Button on:click={() => count++}>Hello world {count}</Button>

```

<!-- example-end -->

## API

### Props

| Name | Description              | Type     | Default value |
| :--- | :----------------------- | :------- | :------------ |
| text | Specify the button text. | `string` | `""`          |

[npm]: https://img.shields.io/npm/v/component-sveltekit.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/component-sveltekit
