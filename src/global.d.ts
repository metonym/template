declare module "svelte/compiler" {
  import type { Ast, Element } from "svelte/types/compiler/interfaces";
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

  type AstNode = Element | ClassSelectorNode | SelectorNode;

  export function walk(
    ast: Ast,
    options: {
      enter: (node: AstNode, parentNode: AstNode) => void;
    }
  ): void;
}
