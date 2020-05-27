# plugin-postcss

[![Build][build]][build-badge]

> PostCSS plugin template.

Brief description describing the purpose of the [PostCSS](https://github.com/postcss/postcss) plugin.

## Install

```bash
yarn add -D plugin-postcss
# OR
npm i -D plugin-postcss
```

## Usage

### Node.js

```js
const postcss = require("postcss");
const { plugin } = require("plugin-postcss");

postcss(plugin)
  .process("* { color: red; }", {
    from: undefined,
  })
  .then((result) => {
    console.log(result.css);
  });
```

### Options

```ts
plugin(options?: Options);

interface Options {
  /**
   * Relative path to processed HTML file
   */
  path?: string;
}
```

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/template.svg?branch=plugin-postcss
[build-badge]: https://travis-ci.com/metonym/template
