/* eslint-disable no-unused-vars */
import {
  Box,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Table,
  TableHead,
} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const User = ({ user }) => {
  console.log('🔴 User', user)
  return (
    <Card>
      <CardMedia
        component="img"
        title={user.name}
        image="https://picsum.photos/1200/630"
        sx={{
          aspectRatio: '4/1',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          paddingLeft: '1rem',

          width: '100%',
        }}
      >
        <Avatar
          sx={{
            width: 'clamp(80px, 30vw, 200px)',
            height: 'clamp(80px, 30vw, 200px)',
            marginTop: 'calc(clamp(40px, 15vw, 100px) * -1)',
            aspectRatio: '1/1',
            bgcolor: 'primary.main',
          }}
        >
          <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
        </Avatar>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: '1rem',
          }}
        >
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="subtitle1">{user.username}</Typography>
        </Box>
      </Box>
      <CardContent></CardContent>
    </Card>
  )
}

export default User
