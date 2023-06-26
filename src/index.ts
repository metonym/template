import MagicString from "magic-string";
import { parse, walk } from "svelte/compiler";
import type { SveltePreprocessor } from "svelte/types/compiler/preprocess";

interface Options {
  ignore?: boolean;
}

export const preprocessor: SveltePreprocessor<"markup", Options> = (
  options
) => {
  const ignore = options?.ignore === true;

  return {
    name: "preprocess-name",
    markup({ content, filename }) {
      if (ignore) return;
      if (filename && /node_modules/.test(filename)) return;

      const ast = parse(content);
      const s = new MagicString(content);
      const class_names = new Set();

      walk(ast, {
        enter(node, parent) {
          if (node.type === "InlineComponent") {
            const class_attribute = node.attributes.find(
              ({ type, name }) => type === "Attribute" && name === "class"
            );

            class_attribute?.value[0]?.raw
              .split(" ")
              .forEach((class_name: string) => {
                class_names.add(class_name);
              });
          }

          if (node.type === "ClassSelector" && class_names.has(node.name)) {
            if ((parent.children ?? []).length > 1) {
              const selector = content.slice(parent.start, parent.end);
              s.overwrite(parent.start, parent.end, `:global(${selector})`);
            } else {
              s.overwrite(node.start, node.end, `:global(.${node.name})`);
            }
          }
        },
      });

      return {
        code: s.toString(),
        map: s.generateMap({
          source: filename,
          hires: true,
        }),
      };
    },
  };
};
