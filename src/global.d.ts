declare module "svelte/compiler" {
  import type { Ast, Element, Text } from "svelte/types/compiler/interfaces";

  type CustomElement<T> = Omit<Element, "type"> & T;

  type ClassSelector = CustomElement<{
    type: "ClassSelector";
  }>;

  type InlineComponent = CustomElement<{
    type: "InlineComponent";
    attributes: Array<Attribute>;
  }>;

  type Attribute = CustomElement<{
    type: "Attribute";
  }>;

  type Literal = CustomElement<{
    type: "Literal";
    value: string;
  }>;

  type TemplateElement = CustomElement<{
    type: "TemplateElement";
    value: { raw: string };
  }>;

  type PseudoClassSelector = CustomElement<{
    type: "PseudoClassSelector";
    name: "global" | string;
  }>;

  type Class = CustomElement<{
    type: "Class";
  }>;

  type Attribute = CustomElement<{
    type: "Attribute";
    name: string;
    value?: Array<Literal | TemplateElement | Text>;
  }>;

  type Identifier = CustomElement<{
    type: "Identifier";
  }>;

  type ImportDeclaration = CustomElement<{
    type: "ImportDeclaration";
    source: { value: string };
    specifiers: Array<{
      local: { name: string };
      imported: { name: string };
    }>;
  }>;

  type AstNode =
    | Element
    | Text
    | ClassSelector
    | InlineComponent
    | Attribute
    | Literal
    | TemplateElement
    | PseudoClassSelector
    | Class
    | Attribute;

  export function walk(
    ast: Ast,
    options: {
      enter: (node: AstNode, parentNode: AstNode) => void;
    }
  ): void;
}
