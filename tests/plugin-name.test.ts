import postcss from "postcss";
import { pluginName } from "../src";

describe("postcss-plugin-name", () => {
  const process = (input: string) => {
    return postcss([pluginName()]).process(input, {
      from: undefined,
    }).css;
  };

  it("should add font-size: 16px to universal selector", async () => {
    const input = `* { color: red; }`;
    const expected = `* { color: red; font-size: 16px; }`;

    expect(process(input)).toEqual(expected);
  });

  it("should not modify other selectors", async () => {
    const input = `.some-class { color: blue; }`;
    const expected = `.some-class { color: blue; }`;

    expect(process(input)).toEqual(expected);
  });

  it("should work with empty universal selector", async () => {
    const input = `* {}`;
    const expected = `* {\n    font-size: 16px}`;

    expect(process(input)).toEqual(expected);
  });

  it("should handle multiple rules including universal selector", async () => {
    const input = `
      * { margin: 0; }
      .class { color: red; }
      * { padding: 0; }
    `;
    const expected = `
      * { margin: 0; font-size: 16px; }
      .class { color: red; }
      * { padding: 0; font-size: 16px; }
    `;

    expect(process(input)).toEqual(expected);
  });
});
