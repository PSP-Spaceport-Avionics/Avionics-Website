import React from 'react';
import NavBarButton from './NavbarButton';

import './Navbar.css';
import Link from 'next/link';
import { Button } from '@mui/material';

const buttons = [
	{ href: '/about', label: 'About' },
	{ href: '/history', label: 'History' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/contact', label: 'Contact' },
];

function navbar() {
	return (
		<nav className='navbar items-center'>
			<div className='logo mx-10'>logo</div>
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
