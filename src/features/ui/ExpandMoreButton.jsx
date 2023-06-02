import { IconButton } from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMoreButton = ({ expand, sx, ...others }) => {
  return (
    <IconButton
      {...others}
      sx={{
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: 'transform 1s',
        ...sx,
      }}
    >
      <ExpandMoreIcon />
    </IconButton>
  )
}

export default ExpandMoreButton
