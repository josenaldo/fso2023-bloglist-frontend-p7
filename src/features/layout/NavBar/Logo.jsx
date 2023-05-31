import { Typography } from '@mui/material'
import { appConfig } from '@/data'

const Logo = ({ sx }) => {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1, ...sx }}>
      {appConfig.application.name}
    </Typography>
  )
}

export default Logo
