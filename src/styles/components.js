import { primaryColor } from './palette'
const components = {
  MuiCard: {
    variants: [
      {
        props: { variant: 'comment' },
        style: {
          padding: '0.5rem',
          borderRadius: '1rem',
        },
      },
    ],
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: '1rem',
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
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
      {
        props: { variant: 'cardTitle' },
        style: {
          color: primaryColor[200],
          textDecoration: 'none',
          border: (theme) => `1px solid ${theme.palette.primary.main}`,
          '&:hover': {
            color: primaryColor[400],
          },
        },
      },
    ],
  },
}

export default components
