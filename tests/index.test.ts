import { expect, test } from "vitest";
import * as API from "../src";
import type { Processed } from "svelte/types/compiler/preprocess";

test("API", () => {
  expect(Object.keys(API)).toMatchInlineSnapshot(`
    [
      "preprocessor",
    ]
  `);
});

const preprocess = (content: string) =>
  (API.preprocessor().markup?.({ content }) as Processed).code;

test("no styles", () => {
  expect(
    preprocess(`<Component id="my-id" class="class1 class2" />`)
  ).toMatchSnapshot();
});
