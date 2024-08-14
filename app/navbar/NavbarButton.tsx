import React from 'react';
import Button from '@mui/material/Button';

import './Navbar.css';

interface NavBarButtonProps {
	children: React.ReactNode;
}
const CustomButton: React.FC<NavBarButtonProps> = ({ children }) => {
	return (
		<Button
			variant='text'
			disableElevation
			disableRipple
			sx={{
				color: 'secondary.light',
				'&:hover': {
					color: 'primary.main',
					backgroundColor: 'black',
				},
				position: 'relative',
				'&::after': {
					content: '""',
					position: 'absolute',
					left: 0,
					bottom: 0,
					width: '100%',
					height: '2px',
					backgroundColor: 'currentColor',
					transform: 'scaleX(0)',
					transformOrigin: 'bottom left',
					transition: 'transform 0.15s ease-in-out',
				},
				'&:hover::after': {
					transform: 'scaleX(1)',
					transformOrigin: 'bottom left',
				},
				'&:not(:hover)::after': {
					transform: 'scaleX(0)',
					transformOrigin: 'bottom right',
				},
			}}
		>
			{children}
		</Button>
	);
};

export default CustomButton;
