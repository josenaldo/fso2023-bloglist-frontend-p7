import { Box, CircularProgress, Typography } from '@mui/material'

const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: '2rem',
      }}
    >
      <CircularProgress />
      <Typography>Loading...</Typography>
    </Box>
  )
}

export default Loading
