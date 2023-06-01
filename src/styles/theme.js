import { createTheme } from '@mui/material/styles'

import palette from './palette'
import components from './components'

const baseTheme = {
  palette,
  components,
}

const extendTheme = (theme) => {
  theme.typography.h1 = {
    fontSize: 'clamp(2.40rem, 5vw, 3rem)',
    fontWeight: 700,
  }

  theme.typography.h2 = {
    fontSize: 'clamp(1.80rem, 4.5vw, 2.40rem)',
    fontWeight: 700,
  }

  theme.typography.h3 = {
    fontSize: 'clamp(1.40rem, 4vw, 1.80rem)',
    fontWeight: 700,
  }

  theme.typography.h4 = {
    fontSize: 'clamp(1.20rem, 3.5vw, 1.60rem)',
    fontWeight: 700,
  }

  theme.typography.h5 = {
    fontSize: 'clamp(1.00rem, 3vw, 1.40rem)',
    fontWeight: 700,
  }

  theme.typography.h6 = {
    fontSize: 'clamp(1.00rem, 2.5vw, 1.20rem)',
    fontWeight: 500,
  }
}
const theme = createTheme(baseTheme)
extendTheme(theme)

export default theme
