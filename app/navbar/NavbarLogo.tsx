import Link from 'next/link';
import React from 'react';
import './Navbar.css';

import star from '../../public/Images/starburst-four-point.svg';

const handleClick = (e: { preventDefault: () => void }) => {
	e.preventDefault();
	window.scrollTo({ top: 0, behavior: 'smooth' });
	window.history.pushState({}, '', '/');
};

function NavbarLogo() {
	return (
		<Link
			href={'/'}
			className='logo flex mr-10 items-center'
			onClick={handleClick}
		>
			<div className='logoText ml-5'>SP AVIONICS</div>
			<img
				src={star.src}
				alt='SPA Avionics Logo'
				className='logoImg h-full'
			/>
		</Link>
	);
}

export default NavbarLogo;
