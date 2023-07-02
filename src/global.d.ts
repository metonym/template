declare module "svelte/compiler" {
  import type { Ast, Element } from "svelte/types/compiler/interfaces";

  interface AugmentedElement extends Element {
    type: "ClassSelector" | "InlineComponent";
  }

  export function walk(
    ast: Ast,
    options: {
      enter: (node: AugmentedElement, parentNode: AugmentedElement) => void;
    }
  ): void;
}
