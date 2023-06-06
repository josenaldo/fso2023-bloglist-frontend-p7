import { appConfig } from '@/data'
import { Box, Container, Link, Paper, Typography } from '@mui/material'

const Footer = () => {
  const repositories = appConfig.application.repositories

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
          flexDirection: { xs: 'column', sm: 'row' },

          justifyContent: 'space-evenly',

          alignItems: { xs: 'center', sm: 'flex-start' },
          gap: '0.5rem',
          fontSize: '0.8rem',
        }}
      >
        <FooterBox>
          <Typography>Repositories</Typography>
          {repositories.map((repo) => (
            <Link
              key={repo.url}
              href={repo.url}
              target="_blank"
              rel="noopener noreferer"
            >
              {repo.name}
            </Link>
          ))}
        </FooterBox>
        <FooterBox>
          <Typography>Created By</Typography>
          <Link
            href="https://josenaldo.github.io"
            target="_blank"
            rel="noopener noreferer"
          >
            {appConfig.application.createdBy}
          </Link>
        </FooterBox>
      </Container>
    </Paper>
  )
}

const FooterBox = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      {children}
    </Box>
  )
}

export default Footer
