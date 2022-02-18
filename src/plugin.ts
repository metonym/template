import type { Plugin } from "vite";

type PluginVite = (options?: {}) => Plugin;

export const plugin: PluginVite = (options = {}) => {
  return {
    name: "vite:plugin-name",
    apply: "build",
    buildStart() {},
    load(id) {
      const module_info = this.getModuleInfo(id);
      return undefined;
    },
    transform(code, id) {
      return undefined;
    },
    config() {},
    configResolved(resolvedConfig) {},
    generateBundle() {},
    buildEnd() {},
    closeBundle() {},
  };
};
