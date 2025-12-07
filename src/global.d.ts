declare module "estree-walker" {
  export type { AST } from "svelte/src/compiler/types/template";

  export declare function walk(
    ast: AST,
    options: {
      enter?: (node: AST.SvelteNode, parent: AST.SvelteNode) => void;
      leave?: (node: AST.SvelteNode, parent: AST.SvelteNode) => void;
    }
  ): AST.Node | null;
}

declare module "svelte/compiler" {
  export type SveltePreprocessor<
    PreprocessorType extends keyof PreprocessorGroup,
    Options = unknown
  > = (
    options?: Options
  ) => Required<Pick<PreprocessorGroup, PreprocessorType>>;
}
