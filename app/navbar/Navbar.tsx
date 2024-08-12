import React from 'react';

import './NavBar.css';
import Link from 'next/link';
import { Button } from '@mui/material';
function navbar() {
	return (
		<nav className='navBar items-center'>
			<div className='logo mx-10'>logo</div>
			<div className='space-x-4'>
				<Link href='/about'>
					<Button
						variant='text'
						disableElevation
						sx={{
							color: 'secondary.main',
							'&:hover': {
								color: 'primary.main',
								backgroundColor: 'black',
							},
						}}
					>
						About
					</Button>
					<Button
						variant='text'
						disableElevation
						sx={{
							color: 'secondary.main',
							'&:hover': {
								color: 'primary.main',
								backgroundColor: 'black',
							},
						}}
					>
						History
					</Button>
					<Button
						variant='text'
						disableElevation
						sx={{
							color: 'secondary.main',
							'&:hover': {
								color: 'primary.main',
								backgroundColor: 'black',
							},
						}}
					>
						Projects
					</Button>
					<Button
						variant='text'
						disableElevation
						sx={{
							color: 'secondary.main',
							'&:hover': {
								color: 'primary.main',
								backgroundColor: 'black',
							},
						}}
					>
						Contact
					</Button>
				</Link>
			</div>
		</nav>
	);
}

export default navbar;
