import type PostHTML from "posthtml";

export function plugin(options?: {}) {
  return function (tree: PostHTML.Node) {
    return tree;
  };
}
