import NextAuth, { type NextAuthOptions } from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import { prisma } from '@utils/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const authOptions: NextAuthOptions = {
	// Configure one or more authentication providers
	adapter: PrismaAdapter(prisma),
	providers: [
		EmailProvider({
			from: 'magiclink@yourdomain.com',
			server: {
				host: process.env.SENDGRID_SERVER,
				port: process.env.SENDGRID_PORT,
				auth: {
					user: process.env.SENDGRID_USERNAME,
					pass: process.env.SENDGRID_PASSWORD
				}
			},
		})
	],
	callbacks: {},
	pages: {}
};

export default NextAuth(authOptions);
