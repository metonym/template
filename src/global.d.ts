import type { Element } from "svelte/types/compiler/interfaces";
import type { PreprocessorGroup } from "svelte/types/compiler/preprocess";

declare global {
  export interface SveltePreprocessor<
    PreprocessorType extends keyof PreprocessorGroup,
    Options = any
  > {
    (options?: Options): Required<Pick<PreprocessorGroup, PreprocessorType>>;
  }

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
