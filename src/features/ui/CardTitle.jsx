import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const CardTitle = ({ children, variant = 'h5', ...otherProps }) => {
  return (
    <Typography component="div" gutterBottom variant={variant} {...otherProps}>
      {children}
    </Typography>
  )
}

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

export default CardTitle
