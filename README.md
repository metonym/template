# webpack-svelte

> Template for building Svelte apps with webpack.

## Quick Start

```sh
npx degit metonym/template#webpack-svelte svelte-app
cd svelte-app
yarn
```

## Available Scripts

### `yarn start`

Start the app in development mode.

### `yarn build`

Build the app for production.

## Notes

CSS emitted from Svelte is optimized and inlined in the `index.html` when building for production. To disable this, remove the following plugin from [webpack.config.js](webpack.config.js):

```diff
{
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "[name].[chunkhash].css" }),
    new OptimizeCssAssetsPlugin(),
    new HtmlWebpackPlugin({ template: "src/index.html" }),
-   new HTMLInlineCSSWebpackPlugin(),
    new webpack.DefinePlugin({ VERSION: JSON.stringify(version) }),
  ],
}
```

## [License](LICENSE)

MIT
