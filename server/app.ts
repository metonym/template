import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";

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

app
  .get("/api/*", (req) => {
    return {
      params: req.params,
      message: "Hello World",
    };
  })
  .post("/event", () => {
    return "ok";
  })
  .listen(3000);

console.log(
  `[${import.meta.env.NODE_ENV}] Serving http://${app.server?.hostname}:${app.server?.port}`,
);

export { app };
