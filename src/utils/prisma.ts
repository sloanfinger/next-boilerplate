import { PrismaClient } from '@prisma/client';

declare module global {
	let prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV !== 'production') {
	global.prisma = prisma;
}
