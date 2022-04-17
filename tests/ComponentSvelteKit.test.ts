import { test, expect, describe, afterEach } from "vitest";
import userEvent from "@testing-library/user-event";
import type { SvelteComponent } from "svelte";
import { Basic } from "./examples";

describe("ComponentSvelteKit", () => {
  let instance: SvelteComponent = null;

  afterEach(() => {
    instance?.$destroy();
    instance = null;
    document.body.innerHTML = "";
  });

  test("Basic", async () => {
    const target = document.body;
    instance = new Basic({ target, props: {} });

    expect(target.querySelector("button").innerHTML).toEqual("Hello world 0");
    await userEvent.click(target.querySelector("button"));
    expect(target.querySelector("button").innerHTML).toEqual("Hello world 1");
  });
});
