import Link from 'next/link';
import React from 'react';
import { ReactSVG } from 'react-svg';
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
			onClick={handleClick}
		>
			<div className='logoText -ml-2'>
				<div className='SPA font-bold tracking-wide'>SPA</div>
				<div className='avionics font-thin tracking-wide'>AVIONICS</div>
			</div>
			<ReactSVG className='logoImg' src='/svg/rocket.svg' />
		</Link>
	);
}

export default NavbarLogo;
