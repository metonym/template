import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/app";

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: "/api" })],
});
