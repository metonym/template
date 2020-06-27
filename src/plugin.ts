import PostHTML from "posthtml";

function plugin(options?: {}) {
  return function (tree: PostHTML.Node) {
    return tree;
  };
}

export default plugin;
export { plugin };
