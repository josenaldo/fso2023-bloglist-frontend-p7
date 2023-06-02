import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const SessionTitle = ({ children, variant = 'h2' }) => {
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

SessionTitle.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

export default SessionTitle
