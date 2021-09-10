/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ButtonProps {
  /**
   * @default "primary"
   */
  kind?: "primary" | "secondary" | "tertiary";
}

export default class Button extends SvelteComponentTyped<
  ButtonProps,
  {},
  { default: {} }
> {}
