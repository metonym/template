import { test, expect, describe, afterEach, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { SvelteComponent, tick } from "svelte";
import { Basic } from "../demo/exports";

describe("ComponentSvelteKit", () => {
  let instance: SvelteComponent = null;

  afterEach(() => {
    instance?.$destroy();
    instance = null;
    document.body.innerHTML = "";
  });

  test("Basic", async () => {
    document.body.innerHTML = `
      <div id="target">
      </div>
    `;

    const target = document.getElementById("target");

    instance = new Basic({ target, props: {} });

    expect(target.querySelector("button").innerHTML).toEqual("Hello world 0");

    userEvent.click(target.querySelector("button"));
    await tick();

    expect(target.querySelector("button").innerHTML).toEqual("Hello world 1");
  });
});
