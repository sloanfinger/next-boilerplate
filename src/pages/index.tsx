import trpc from '@utils/trpc';

export default function Home() {

	const query = trpc.proxy.echo.useQuery('world');

	return (
		<p>{query.data ?? 'Loading...'}</p>
	);
}