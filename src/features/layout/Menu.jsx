import { Link } from 'react-router-dom'

import { Box, Container, Link as MuiLink, Paper } from '@mui/material'

import { menuConfig } from '@/data'

const Menu = () => {
  return (
    <Paper component="nav" elevation={3} sx={{ py: 2 }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          {menuConfig.map((item) => (
            <MuiLink component={Link} key={item.path} to={item.path}>
              {item.title}
            </MuiLink>
          ))}
        </Box>
      </Container>
    </Paper>
  )
}

export default Menu
