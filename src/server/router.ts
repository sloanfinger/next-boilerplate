import t from '@server/trpc';
import { echo } from '@server/procedures';

const router = t.router({ echo });

export default router;

export type Router = typeof router;