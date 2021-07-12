/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface defaultProps {
  /**
   * @default 0
   */
  count?: number;
}

export default class extends SvelteComponentTyped<
  defaultProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
