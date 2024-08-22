import { createTheme, darken } from '@mui/material/styles';
import { yellow, grey } from '@mui/material/colors';

//remember to npm install @fontsource/roboto
import '@fontsource/roboto/100.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Define your custom theme
const theme = createTheme({
	palette: {
		primary: {
			main: yellow[700],
			dark: darken(yellow[700], 0.2),
			light: yellow[500],
		},
		secondary: {
			main: grey[500],
			light: '#ffffff',
		},
		text: {
			primary: '#ffffff',
			secondary: '#000000',
		},
	},
	typography: {
		fontFamily: 'Roboto, Arial, sans-serif',
		fontWeightLight: 100,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	},
});
export default theme;
