import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/app/server/routers/_app';
import { createTRPCContext } from '@/app/server/trpc';

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: createTRPCContext,
  });

export { handler as GET, handler as POST };