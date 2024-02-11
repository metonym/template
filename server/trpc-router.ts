import { initTRPC } from "@trpc/server";
import { z } from "zod";

const trpc = initTRPC.create();
const procedure = trpc.procedure;

export const router = trpc.router({
  greet: procedure.input(z.string()).query(({ input }) => {
    return {
      message: `Hello, ${input}!`,
    };
  }),
});

export type Router = typeof router;
