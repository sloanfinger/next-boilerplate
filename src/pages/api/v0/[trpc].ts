import createContext from '@server/context';
import router from '@server/router';
import { createNextApiHandler } from '@trpc/server/adapters/next';

export default createNextApiHandler({ router, createContext });
