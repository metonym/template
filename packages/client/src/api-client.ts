import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { Router } from "server/src/trpc-router";

export const trpcClient = createTRPCProxyClient<Router>({
  links: [httpBatchLink({ url: "/api" })],
});
