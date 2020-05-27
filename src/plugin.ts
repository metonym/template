import postcss from "postcss";

const plugin = postcss.plugin("postcss-plugin", (options?: {}) => {
  return (root, result) => {
    root.walkRules((node) => {
      if (node.selector === "*") {
        node.append({ prop: "font-size", value: "16px" });
      }
    });
  };
});

export default plugin;
export { plugin };
