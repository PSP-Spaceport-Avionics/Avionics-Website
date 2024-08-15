import React from 'react';
import NavBarButton from './NavbarButton';
import Link from 'next/link';
import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

import './Navbar.css';

import logo from '../../styles/logo.png';
import star from '../../styles/starburst-four-point.svg';

const buttons = [
	{ href: '#about', label: 'About' },
	{ href: '#history', label: 'History' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#contact', label: 'Contact' },
];

function navbar() {
	const [showNavBar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (window.scrollY > lastScrollY) {
			setShowNavbar(false);
		} else {
			setShowNavbar(true);
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);
	return (
		<nav
			className={`navbar items-center justify-center ${
				showNavBar ? 'show' : 'hide'
			}`}>
			<Link
				href={'/'}
				className='logo flex mr-20 items-center'>
				<div className='logoText ml-5 text-2xl'>SP AVIONICS</div>
				<img
					src={star.src}
					alt='SPA Avionics Logo'
					className='logoImg h-full'
				/>
			</Link>
			<div className='space-x-4'>
				{buttons.map((button) => (
					<Link
						key={button.href}
						href={button.href}
						passHref>
						<NavBarButton>{button.label}</NavBarButton>
					</Link>
				))}
			</div>
		</nav>
	);
}

export default navbar;
