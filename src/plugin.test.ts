import posthtml from "posthtml";
import { strict as test } from "assert";
import { plugin } from "./plugin";

async function run() {
  const { html } = await posthtml().use(plugin()).process("<body></body>");
  test.equal(html, "<body></body>");
}

run();
