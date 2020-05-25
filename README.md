# plugin-posthtml <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![Build][build]][build-badge]

> PostHTML plugin template.

Brief description describing the purpose of the [PostHTML](https://github.com/posthtml/posthtml) plugin.

```diff
<html>
  <head>
-   <stylesheet href="styles.css" />
+   <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
-   <script src="src.js" />
+   <script src="srcjs"></script>
  </body>
</html>
```

## Install

```bash
yarn add -D plugin-posthtml
# OR
npm i -D plugin-posthtml
```

## Usage

### Node.js

```js
const fs = require("fs");
const posthtml = require("posthtml");
const { plugin } = require("plugin-posthtml");

posthtml()
  .use(plugin())
  .process(fs.readFileSync("./build/index.html"))
  .then((result) => fs.writeFileSync("./build/index.html", result.html));
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

[build]: https://travis-ci.com/metonym/template.svg?branch=plugin-posthtml
[build-badge]: https://travis-ci.com/metonym/template
