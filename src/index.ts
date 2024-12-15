import type { Plugin } from "postcss";

export const pluginName = (options?: {}): Plugin => {
  return {
    postcssPlugin: "postcss-plugin-name",
    Once(root) {
      root.walkRules((node) => {
        if (node.selector === "*") {
          node.append({ prop: "font-size", value: "16px" });
        }
      });
    },
  };
};
