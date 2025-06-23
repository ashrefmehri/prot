import { inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "../../trpc/routers/_app";

export type meetingGetMany = inferRouterOutputs<AppRouter>["meetings"]["getMany"]["item"]
export type meetingGetOne = inferRouterOutputs<AppRouter>["meetings"]["getOne"]