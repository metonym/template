const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { version } = require("./package.json");

const NODE_ENV = process.env.NODE_ENV || "development";
const IS_PROD = NODE_ENV === "production";

module.exports = {
  stats: "errors-only",
  mode: NODE_ENV,
  devtool: IS_PROD ? false : "cheap-eval-source-map",
  entry: { bundle: ["./src/index.js"] },
  resolve: {
    alias: { svelte: path.resolve("node_modules", "svelte") },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: { path: `${__dirname}/build`, filename: "[name].[chunkhash].js" },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: { loader: "svelte-loader", options: { hotReload: true } },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new webpack.DefinePlugin({ VERSION: JSON.stringify(version) }),
  ],
};
