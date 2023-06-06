import { Box } from '@mui/material'

const BigButtonBox = ({ children, sx }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

export default BigButtonBox
