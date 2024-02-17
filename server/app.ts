import { trpcServer } from "@hono/trpc-server";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { csrf } from "hono/csrf";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";
import { NODE_ENV, PORT, SITE_URL } from "./constants";
import { router } from "./trpc-router";

const app = new Hono();

if (NODE_ENV === "production") {
  app
    .use(secureHeaders())
    .use(csrf({ origin: new URL(SITE_URL).host }))
    .use(logger())
    .use("/*", serveStatic({ root: "./dist" }));
}

app.use("/api/*", trpcServer({ router }));

console.log(`[${NODE_ENV}] Running at http://localhost:${PORT}`);

export default {
  port: PORT,
  fetch: app.fetch,
};
