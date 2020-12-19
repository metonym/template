/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ComponentProps {
  /**
   * @default 0
   */
  count?: number;
}

export default class Component extends SvelteComponentTyped<
  ComponentProps,
  { click: WindowEventMap["click"] },
  { default: {} }
> {}
