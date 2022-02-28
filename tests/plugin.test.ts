import { test, expect } from "vitest";
import posthtml from "posthtml";
import { plugin } from "../src";

test("plugin", async () => {
  const input = "<body></body>";
  const { html } = await posthtml().use(plugin()).process(input);

  expect(html).toEqual(input);
});
