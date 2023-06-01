import { createTheme } from '@mui/material/styles'
import {
  teal as primaryColor,
  deepPurple as secondaryColor,
  grey as surficeColor,
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
    background: {
      default: '#121212',
      paper: '#1e1e1e',
      transparent: 'rgba(0, 0, 0, 0.5)',
    },
    surfice: {
      s100: surficeColor[100],
      s200: surficeColor[200],
      s300: surficeColor[300],
      s400: surficeColor[400],
      s500: surficeColor[500],
      s600: surficeColor[600],
      s700: surficeColor[700],
      s800: surficeColor[800],
      s900: surficeColor[900],
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
    MuiLink: {
      variants: [
        {
          props: { variant: 'nav' },
          style: {
            color: 'inherit',
            textDecoration: 'none',
          },
        },
        {
          props: { variant: 'plain' },
          style: {
            color: 'inherit',
            textDecoration: 'none',
          },
        },
      ],
    },
  },
})

export default theme
