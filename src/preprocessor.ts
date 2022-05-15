import { parse, walk } from "svelte/compiler";
import MagicString from "magic-string";
import type { PreprocessorGroup } from "svelte/types/compiler/preprocess";
import type { Element } from "svelte/types/compiler/interfaces";

interface ClassSelectorNode {
  type: "ClassSelector";
  name: string;
  start: number;
  end: number;
  children: any[];
}

interface SelectorNode {
  type: "Selector";
  name: string;
  start: number;
  end: number;
  children: ClassSelectorNode[];
}

type Node = Element | ClassSelectorNode | SelectorNode;

export function preprocessor(): Pick<PreprocessorGroup, "markup"> {
  return {
    markup({ content, filename }) {
      if (filename && /node_modules/.test(filename)) return;

      const ast = parse(content);
      const s = new MagicString(content);
      const class_names = new Set();

      walk(ast, {
        enter(node: Node, parent: Node) {
          if (node.type === "InlineComponent") {
            const class_attribute = node.attributes.find(
              ({ type, name }: any) => type === "Attribute" && name === "class"
            );

            class_attribute?.value[0]?.raw
              .split(" ")
              .forEach((class_name: string) => {
                class_names.add(class_name);
              });
          }

          if (node.type === "ClassSelector" && class_names.has(node.name)) {
            if ((parent as SelectorNode).children.length > 1) {
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
          file: filename,
          includeContent: true,
        }),
      };
    },
  };
}
