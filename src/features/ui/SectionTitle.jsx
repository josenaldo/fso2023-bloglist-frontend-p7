import { Typography } from '@mui/material'

const SectionTitle = ({ children, variant = 'h2' }) => {
  return (
    <Typography
      variant={variant}
      sx={{
        mt: '1.5rem',
        mb: '1.5rem',
      }}
    >
      {children}
    </Typography>
  )
}

export default SectionTitle
