import type { Plugin } from "vite";

type PluginVite = (config: {}) => Plugin;

export const plugin: PluginVite = (options = {}) => {
  return {
    name: "vite:plugin-name",
    apply: "build",
    configResolved(resolvedConfig) {},
    closeBundle() {},
  };
};
