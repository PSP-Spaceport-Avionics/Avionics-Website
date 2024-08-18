import type { Metadata } from 'next';

import ClientLayout from '../styles/ClientLayout';
import CssBaseline from '@mui/material/CssBaseline';

import '../styles/globals.css';

export const metadata: Metadata = {
	title: 'Avionics Spaceport America',
	description: 'Generated by create next app',
	icons: {
		icon: '/svg/rocket3.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<CssBaseline />
				<ClientLayout>{children}</ClientLayout>
			</body>
		</html>
	);
}
