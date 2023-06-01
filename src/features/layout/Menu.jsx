import { Box, Container, Paper } from '@mui/material'

import { menuConfig } from '@/data'
import { Link } from '@/features/ui'

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
            <Link component={Link} key={item.path} to={item.path}>
              {item.title}
            </Link>
          ))}
        </Box>
      </Container>
    </Paper>
  )
}

export default Menu
