'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import NavBar from '../app/navbar/Navbar';
import Footer from '../app/footer/Footer';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			{children}
			<Footer />
		</ThemeProvider>
	);
};

export default ClientLayout;
