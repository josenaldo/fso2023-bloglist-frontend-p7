import { Link } from 'react-router-dom'

import { appConfig } from '@/data'
import { Container, Link as MuiLink, Paper } from '@mui/material'

const Header = () => {
  return (
    <Paper component="header" elevation={1}>
      <Container>
        <MuiLink
          component={Link}
          to="/"
          sx={{
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <h1>{appConfig.application.name}</h1>
        </MuiLink>
      </Container>
    </Paper>
  )
}

export default Header
