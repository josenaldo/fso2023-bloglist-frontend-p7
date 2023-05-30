import { Typography } from '@mui/material'

const Logo = ({ name }) => {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
    >
      {name}
    </Typography>
  )
}

export default Logo
