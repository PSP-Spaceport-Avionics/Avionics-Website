'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import NavBar from '../app/navbar/Navbar';
import Footer from '../app/footer/Footer';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		// Check if the fonts are already loaded
		if (document.fonts && document.fonts.ready) {
			document.fonts.ready.then(() => {
				setFontsLoaded(true);
			});
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<div>
				<NavBar />
				{fontsLoaded && <main className='flex-grow'>{children}</main>}
				{fontsLoaded && <Footer />}
			</div>
		</ThemeProvider>
	);
};

export default ClientLayout;
