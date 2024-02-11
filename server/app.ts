import { staticPlugin } from "@elysiajs/static";
import { compile as c, trpc } from "@elysiajs/trpc";
import { initTRPC } from "@trpc/server";
import { Elysia, t as T } from "elysia";
import { PORT } from "./constants";

const t = initTRPC.create();
const p = t.procedure;
const router = t.router({
  greet: p.input(c(T.String())).query(({ input }) => {
    return {
      message: `Hello, ${input}!`,
    };
  }),
});

export type AppRouter = typeof router;

const app = new Elysia();

if (import.meta.env.NODE_ENV === "production") {
  app.use(
    staticPlugin({
      assets: "dist",
      prefix: "/",
      indexHTML: true,
    }),
  );
}

app.use(trpc(router, { endpoint: "/api" })).listen(PORT, () => {
  console.log(
    `[${import.meta.env.NODE_ENV}] Serving http://${app.server?.hostname}:${app.server?.port}`,
  );
});
