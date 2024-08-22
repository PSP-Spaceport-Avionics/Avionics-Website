import Link from 'next/link';
import React, { useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import './Navbar.css';

import star from '../../public/svg/starburst-four-point.svg';
import rocket from '../../public/svg/rocket.svg';
import logo from '../../public/images/logo1.png';
import ReactLogo from '../../public/svg/rocket.svg';

const handleClick = (e: { preventDefault: () => void }) => {
	e.preventDefault();
	window.history.pushState({}, '', '/');
	window.scrollTo({ top: 0, behavior: 'smooth' });

	console.log(window.scrollY);
};
//AVIONICS THEN SPA
function NavbarLogo() {
	return (
		<Link
			href={'#'}
			className='logo flex mr-10 items-center'
			onClick={handleClick}>
			<div className='logoText -ml-2'>
				<div className='avionics tracking-wide'>AVIONICS</div>
				<div className='SPA tracking-wide'>SPACEPORT AMERICA</div>
			</div>
			<ReactLogo className='logoImg' />
			{/*<ReactSVG
				className='logoImg2'
				src='/svg/rocket2.svg'
			/>*/}
		</Link>
	);
}

export default NavbarLogo;
