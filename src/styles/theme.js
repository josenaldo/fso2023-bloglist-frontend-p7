import { createTheme } from '@mui/material/styles'
import {
  teal as primaryColor,
  deepPurple as secondaryColor,
} from '@mui/material/colors/'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: primaryColor[200],
    },
    secondary: {
      main: secondaryColor[200],
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '1rem',
        },
      },
    },
  },
})

export default theme
