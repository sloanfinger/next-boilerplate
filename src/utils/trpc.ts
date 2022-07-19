import { setupTRPC } from '@trpc/next';
import type { Router } from '@server/router';

const trpc = setupTRPC<Router>({
    ssr: false,
    config: () => ({
        url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/v0` : 'http://localhost:3000/api/v0'
    }),
});

export default trpc;