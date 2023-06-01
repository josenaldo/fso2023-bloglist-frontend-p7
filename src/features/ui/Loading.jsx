import { Box, LinearProgress, Typography } from '@mui/material'
const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: '2rem',
        gap: '1rem',
        padding: '1rem',
      }}
    >
      <Typography variant="h6" color="primary">
        Loading...
      </Typography>
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    </Box>
  )
}

export default Loading
