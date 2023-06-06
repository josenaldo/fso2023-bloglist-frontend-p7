import { Box, Typography } from '@mui/material'

const PageTitle = ({ children, variant = 'h1' }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Typography
        variant={variant}
        sx={{
          mt: '2rem',
          mb: '2rem',
          textAlign: 'center',
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}

export default PageTitle
