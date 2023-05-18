import { yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ffab00',
            contrastText: '#f5f5f5'
        },
        secondary: {
            main: '#d4ff00'
        }
    }
})