import { expect, test } from "vitest";
import { preprocessor } from "../src/preprocessor";
import type { Processed } from "svelte/types/compiler/preprocess";

test("preprocessor", () => {
  const result = preprocessor().markup({
    content: `
<script>
  import Component from "./Component2.svelte";
</script>

<Component class="class1 class2" />

<style>
  .class1 {
    color: red;
  }
</style>`,
    filename: "App.svelte",
  }) as Processed;

  expect(result.code).toMatchInlineSnapshot(`
    "
    <script>
      import Component from \\"./Component2.svelte\\";
    </script>

    <Component class=\\"class1 class2\\" />

    <style>
      :global(.class1) {
        color: red;
      }
    </style>"
  `);
});

test("preprocessor", () => {
  const result = preprocessor().markup({
    content: `
<script>
  import Component from "./Component2.svelte";
</script>

<Component class="class1 class2" />

<style>
  .class1, .class2 {
    color: red;
  }

  .class2 {
    outline: 1px solid red;
  }

  .class2 div, #h1, .not-a-class {
    color: blue;
  }
</style>`,
    filename: "App.svelte",
  }) as Processed;

  expect(result.code).toMatchInlineSnapshot(`
    "
    <script>
      import Component from \\"./Component2.svelte\\";
    </script>

    <Component class=\\"class1 class2\\" />

    <style>
      :global(.class1), :global(.class2) {
        color: red;
      }

      :global(.class2) {
        outline: 1px solid red;
      }

      :global(.class2 div), #h1, .not-a-class {
        color: blue;
      }
    </style>"
  `);
});
