import { Header, Menu, Footer } from '@/features/layout'
import { Alert } from '@/features/alert'
import { Box, Container } from '@mui/material'

const Template = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Header />
      <Menu />
      <Alert />

      <Container
        maxWidth="md"
        sx={{
          flexGrow: 1,
        }}
      >
        <main>{children}</main>
      </Container>

      <Footer />
    </Box>
  )
}

export default Template
