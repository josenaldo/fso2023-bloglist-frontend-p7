import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const CardTitle = ({ children, variant = 'h4' }) => {
  return <Typography variant={variant}>{children}</Typography>
}

CardTitle.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default CardTitle
