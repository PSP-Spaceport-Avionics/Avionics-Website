'use client';

import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import NavBar from '../app/navbar/Navbar';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			{children}
		</ThemeProvider>
	);
};

export default ClientLayout;
