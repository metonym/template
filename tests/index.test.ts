import { test, expect } from "vitest";
import { add } from "../src";

test("add", () => {
  expect(add(1, 2)).toEqual(3);
});
