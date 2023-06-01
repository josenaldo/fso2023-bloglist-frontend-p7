const components = {
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
    },
  },
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: '2rem',
      },
    },
  },
  MuiCardActions: {
    styleOverrides: {
      root: {
        padding: '2rem',
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
}

export default components
