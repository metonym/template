import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { Router } from "../server/trpc-router";

export const trpcClient = createTRPCProxyClient<Router>({
  links: [httpBatchLink({ url: "/api" })],
});
