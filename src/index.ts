import { FastMCP } from "fastmcp";
import { z } from "zod";
import { add } from "./add";

const server = new FastMCP({
  name: "My Server",
  version: "1.0.0",
});

server.addTool({
  name: "add",
  description: "Add three numbers",
  parameters: z.object({
    a: z.number(),
    b: z.number(),
    c: z.number(),
  }),
  execute: async (args) => {
    return String(add(args.a, args.b, args.c));
  },
});

server.start({
  transportType: "httpStream",
  httpStream: {
    port: 8081,
  },
});
