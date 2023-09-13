import { expect, test } from "bun:test";
import { add } from "../src";

test("add", () => {
  expect(add(1, 2)).toEqual(3);
});
