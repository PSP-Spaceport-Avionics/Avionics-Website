import Link from 'next/link';
import React from 'react';
import './Navbar.css';

import star from '../../public/svg/starburst-four-point.svg';
import rocket from '../../public/svg/rocket.svg';
import logo from '../../public/images/logo1.png';

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
			onClick={handleClick}>
			<div className='logoText font-extralight'>SPA Avionics</div>
			<img
				src={rocket.src}
				alt='SPA Avionics Logo'
				className='logoImg'
			/>
		</Link>
	);
}

export default NavbarLogo;
