import t from '@server/trpc';
import { z } from 'zod';

export const echo = t.procedure
	.input(z.string())
	.query(({ input }) => `Hello ${input}!`);