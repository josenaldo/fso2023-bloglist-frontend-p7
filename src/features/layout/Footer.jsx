import { appConfig } from '@/data'
import { Box, Container, Link, Paper } from '@mui/material'

const Footer = () => {
  return (
    <Paper
      component="footer"
      elevation={1}
      sx={{
        py: 5,
        mt: 2,
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.8rem',
        }}
      >
        <Box>
          See{' '}
          <Link href={appConfig.footer.repository}>
            {appConfig.footer.repository}
          </Link>{' '}
          for the source code.
        </Box>
        <Box>
          Created by
          <Link href="https://josenaldo.github.io">
            {appConfig.footer.createdBy}
          </Link>
          .
        </Box>
      </Container>
    </Paper>
  )
}

export default Footer
