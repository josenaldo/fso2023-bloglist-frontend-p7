import { Header, Footer } from '@/features/layout'
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

      <Alert />

      <Container
        maxWidth="md"
        sx={{
          flexGrow: 1,
          my: 2,
        }}
      >
        <main>{children}</main>
      </Container>

      <Footer />
    </Box>
  )
}

export default Template
