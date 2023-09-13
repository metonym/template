import type { Processed } from "svelte/types/compiler/preprocess";
import { expect, test } from "bun:test";
import * as API from "../src";

const preprocess = (content: string) =>
  (API.preprocessor().markup?.({ content }) as Processed).code;

test("no styles", () => {
  expect(
    preprocess(`<Component id="my-id" class="class1 class2" />`)
  ).toMatchSnapshot();
});
