import { createTheme, darken } from '@mui/material/styles';
import { yellow, grey } from '@mui/material/colors';

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
	},
});
export default theme;
