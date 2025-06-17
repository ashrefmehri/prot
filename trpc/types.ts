import { inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "./routers/_app";

export type AgentGetOne = inferRouterOutputs<AppRouter>["agents"]["getOne"]