# component-library-sveltekit

[![NPM][npm]][npm-url]

> Svelte component description

## Installation

```bash
# Yarn
yarn add -D component-library-sveltekit

# NPM
npm i -D component-library-sveltekit

# pnpm
pnpm i -D component-library-sveltekit
```

## Usage

### Basic

<!-- example-start demo/Basic.svelte -->

```svelte
<script>
  import { Button } from "component-library-sveltekit";
</script>

<Button on:click={() => console.log("hello")}>Hello world</Button>
```

<!-- example-end -->

## API

### Props

| Name | Description              | Type     | Default value |
| :--- | :----------------------- | :------- | :------------ |
| text | Specify the button text. | `string` | `""`          |

[npm]: https://img.shields.io/npm/v/component-library-sveltekit.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/component-library-sveltekit
