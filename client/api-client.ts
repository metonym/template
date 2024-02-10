import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "../server/app";

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url: "/api" })],
});

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
