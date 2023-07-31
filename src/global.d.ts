declare module "svelte/compiler" {
  import type { Ast, Element } from "svelte/types/compiler/interfaces";

  interface ANode extends Omit<Element, "type"> {
    type: "ClassSelector" | "InlineComponent" | "Attribute";
  }

  export function walk(
    ast: Ast,
    options: {
      enter: (node: ANode, parentNode: ANode) => void;
    }
  ): void;
}
