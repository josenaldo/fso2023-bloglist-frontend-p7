import { Typography } from '@mui/material'

const PageTitle = ({ title, variant = 'h3' }) => {
  return (
    <Typography
      variant={variant}
      sx={{
        mt: '2rem',
        mb: '2rem',
      }}
    >
      {title}
    </Typography>
  )
}

export default PageTitle
