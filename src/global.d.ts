import type { Element } from "svelte/types/compiler/interfaces";

declare global {
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
}
