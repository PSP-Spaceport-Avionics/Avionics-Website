import { createTheme } from '@mui/material/styles';
import { yellow, grey } from '@mui/material/colors';

// Define your custom theme
const theme = createTheme({
	palette: {
		primary: {
			main: yellow[700],
		},
		secondary: {
			main: grey[500],
		},
	},
});
export default theme;
