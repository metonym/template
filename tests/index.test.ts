import { test, expect, describe } from "vitest";
import * as API from "../src";
import pkg from "../package.json";

describe(pkg.name, () => {
  test("Library has 0 dependencies", () => {
    // @ts-expect-error
    expect(Object.keys(pkg.dependencies ?? {}).length).toEqual(0);
  });

  test("Library does not have a default export", () => {
    // @ts-expect-error
    expect(API.default).toBeUndefined();
  });

  test("Library has the following named exports", () => {
    expect(Object.keys(API)).toMatchInlineSnapshot(`
      [
        "Button",
      ]
    `);
  });
});
