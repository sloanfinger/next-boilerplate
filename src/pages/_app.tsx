import Layout from '@components/layout';
import { SessionProvider } from 'next-auth/react';
import type { AppType } from 'next/dist/shared/lib/utils';

import '@styles/globals.css';
import trpc from '@utils/trpc';

const App: AppType = ({ Component, pageProps: { session, ...pageProps } }) => {
	return (
		<SessionProvider session={session}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	);
};

export default trpc.withTRPC(App);
