/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;700&family=Vollkorn:wght@500;700;900&display=swap" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id="portal-destination" />
				</body>
			</Html>
		);
	}
}