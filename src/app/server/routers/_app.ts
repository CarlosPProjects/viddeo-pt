import { createHydrationHelpers } from '@trpc/react-query/rsc';
import { cache } from "react";

import { createCallerFactory, createTRPCContext, router } from "../trpc";
import { authRouter } from "./auth";
import { userRouter } from "./user";
import { videoRouter } from "./video";
import { makeQueryClient } from "@/app/_trpc/query-client";
import { likesRouter } from './likes';

export const appRouter = router({
  auth: authRouter,
  user: userRouter,
  video: videoRouter,
  likes: likesRouter
});

export const getQueryClient = cache(makeQueryClient);
const caller = createCallerFactory(appRouter)(createTRPCContext);
export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
  caller,
  getQueryClient,
);

export type AppRouter = typeof appRouter;
