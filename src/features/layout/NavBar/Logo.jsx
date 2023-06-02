import { Box, Typography } from '@mui/material'
import { appConfig } from '@/data'
import { Link } from '@/features/ui'

const Logo = ({ sx }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Link to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
        <Typography
          variant="h5"
          component="div"
          sx={{
            margin: 0,
            flexGrow: 1,
            ...sx,
          }}
        >
          {appConfig.application.name}
        </Typography>
      </Link>
    </Box>
  )
}

export default Logo
