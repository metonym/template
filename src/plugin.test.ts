import postcss from "postcss";
import { strict as test } from "assert";
import { plugin } from "./plugin";

async function run() {
  const result = await postcss(plugin).process("* { color: red; }", {
    from: undefined,
  });
  test.equal(result.css, "* { color: red; font-size: 16px; }");
}

run();
