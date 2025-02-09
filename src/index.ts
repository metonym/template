import { type AST, walk } from "estree-walker";
import MagicString from "magic-string";
import { parse, type SveltePreprocessor } from "svelte/compiler";

function isComponent(node: AST.SvelteNode): node is AST.Component {
  return node.type === "Component";
}

function isText(node: AST.SvelteNode): node is AST.Text {
  return node.type === "Text";
}

type Options = {
  ignore?: boolean;
};

export const preprocessor: SveltePreprocessor<"markup", Options> = (
  options
) => {
  const ignore = options?.ignore === true;

  return {
    name: "preprocess-name",
    markup({ content, filename }) {
      if (ignore) return;
      if (filename && /node_modules/.test(filename)) return;

      const ast = parse(content, { modern: true });
      const s = new MagicString(content);
      const class_names = new Set();

      walk(ast, {
        enter(node) {
          if (isComponent(node)) {
            for (const attribute of node.attributes) {
              if (
                attribute.type === "Attribute" &&
                attribute.name === "class"
              ) {
                if (Array.isArray(attribute.value)) {
                  const value = attribute.value[0];

                  if (isText(value)) {
                    for (const class_name of value.data.split(" ")) {
                      class_names.add(class_name);
                    }
                  }
                }
              }
            }
          }
        },
      });

      return {
        code: s.toString(),
        map: s.generateMap({ source: filename, hires: true }),
      };
    },
  };
};
