import type { inferAsyncReturnType } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';

export default async function createContext(opts?: CreateNextContextOptions) {

    return {
        req: opts?.req ?? null,
        res: opts?.res ?? null,
        user: null,
    };

}

export type Context = inferAsyncReturnType<typeof createContext>;