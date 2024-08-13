import React from 'react';
import NavBarButton from './NavbarButton';
import Link from 'next/link';
import { Button } from '@mui/material';

import './Navbar.css';

import logo from '../../styles/logo.png';

const buttons = [
	{ href: '/about', label: 'About' },
	{ href: '/history', label: 'History' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/contact', label: 'Contact' },
];

function navbar() {
	return (
		<nav className='navbar items-center'>
			<img
				src={logo.src}
				alt='SPA Avionics Logo'
				className='logo ml-10'
			/>
			<span className='logoText ml-3 mr-10 text-2xl'>SP Avionics</span>
			<div className='space-x-4'>
				{buttons.map((button) => (
					<Link key={button.href} href={button.href} passHref>
						<NavBarButton>{button.label}</NavBarButton>
					</Link>
				))}
			</div>
		</nav>
	);
}

export default navbar;
