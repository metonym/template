import { expect, test } from "bun:test";
import { add } from "../src/add";

test("add", () => {
  expect(add(1, 2, 3)).toEqual(6);
});
