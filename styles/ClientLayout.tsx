'use client';

import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import NavBar from '../app/navbar/Navbar';
import Footer from '../app/footer/Footer';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<NavBar />
				<main className='flex-grow'>{children}</main>
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default ClientLayout;
