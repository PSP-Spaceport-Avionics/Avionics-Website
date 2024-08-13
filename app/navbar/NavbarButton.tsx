import React from 'react';
import Button from '@mui/material/Button';

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
				color: 'secondary.main',
				'&:hover': {
					color: 'primary.main',
					backgroundColor: 'black',
				},
			}}
		>
			{children}
		</Button>
	);
};

export default CustomButton;
