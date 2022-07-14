import type PostHTML from "posthtml";

export const plugin = (options?: {}) => {
  return (tree: PostHTML.Node) => {
    return tree;
  };
};
