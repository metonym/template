import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { Elysia, t as T } from "elysia";
import { compile as c, trpc } from "@elysiajs/trpc";
import { initTRPC } from "@trpc/server";

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

if (import.meta.env.NODE_ENV === "development") {
  // In development, the backend and frontend run on different ports.
  // We need to enable CORS to allow the frontend to make requests to the backend.
  app.use(
    cors({
      // The default Vite server port.
      origin: ["localhost:4321"],
      methods: ["POST"],
    }),
  );
}

if (import.meta.env.NODE_ENV === "production") {
  app.use(
    staticPlugin({
      assets: "dist",
      prefix: "/",
      indexHTML: true,
    }),
  );
}

app.use(trpc(router, { endpoint: "/api" })).listen(3000, () => {
  console.log(
    `[${import.meta.env.NODE_ENV}] Serving http://${app.server?.hostname}:${app.server?.port}`,
  );
});
