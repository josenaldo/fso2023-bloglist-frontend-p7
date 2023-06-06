import { Typography } from '@mui/material'

const CardTitle = ({ children, variant = 'h5', ...otherProps }) => {
  return (
    <Typography component="div" gutterBottom variant={variant} {...otherProps}>
      {children}
    </Typography>
  )
}

export default CardTitle
