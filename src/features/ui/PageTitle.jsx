import { Typography } from '@mui/material'

const PageTitle = ({ children, variant = 'h1' }) => {
  return (
    <Typography
      variant={variant}
      sx={{
        mt: '2rem',
        mb: '2rem',
      }}
    >
      {children}
    </Typography>
  )
}

export default PageTitle
