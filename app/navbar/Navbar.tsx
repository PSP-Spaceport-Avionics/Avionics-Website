import React, { useState, useEffect } from 'react';
import NavBarButton from './NavbarButton';
import NavbarLogo from './NavbarLogo';
import './Navbar.css';

const buttons = [
	{ href: 'about', label: 'About' },
	{ href: 'history', label: 'History' },
	{ href: 'projects', label: 'Projects' },
	//{ href: 'contact', label: 'Contact' },
];

function Navbar() {
	const [showNavBar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isNavBarLoaded, setIsNavBarLiaded] = useState(false);

	const controlNavbar = () => {
		if (window.scrollY > lastScrollY) {
			setShowNavbar(false);
		} else {
			setShowNavbar(true);
		}
		setLastScrollY(window.scrollY);
	};
	useEffect(() => {
		const navbarElement = document.querySelector('.navbar');

		if (navbarElement instanceof HTMLElement) {
			setIsNavBarLiaded(true);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', controlNavbar);
		return () => {
			window.removeEventListener('scroll', controlNavbar);
		};
	}, [lastScrollY]);

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		href: string
	) => {
		e.preventDefault();
		const targetElement = document.getElementById(href);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<nav
			className={`navbar items-center justify-center ${
				showNavBar ? 'show' : 'hide'
			} ${isNavBarLoaded ? 'loaded' : ''}`}>
			<NavbarLogo />
			<div className='space-x-4'>
				{buttons.map((button) => (
					<a
						key={button.href}
						href={`#${button.href}`}
						onClick={(e) => handleNavClick(e, button.href)}>
						<NavBarButton>{button.label}</NavBarButton>
					</a>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
