'use client';
import { ThemeProvider } from '@mui/material/styles';

import theme from '../styles/theme';
import NavBar from './navbar/Navbar';

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<body></body>
		</ThemeProvider>
	);
}
