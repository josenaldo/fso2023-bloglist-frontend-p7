import {
  Box,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { SessionTitle, CardTitle } from '@/features/ui'
import { BlogList } from '@/features/blog'

const User = ({ user }) => {
  return (
    <Box>
      <Card>
        <CardMedia
          component="img"
          title={user.name}
          image={`https://picsum.photos/seed/${user.username}/1200/630`}
          sx={{
            aspectRatio: '4/1',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            paddingLeft: '2rem',
            width: '100%',
          }}
        >
          <Avatar
            sx={{
              width: 'clamp(60px, 30vw, 150px)',
              height: 'clamp(60px, 30vw, 150px)',
              marginTop: 'calc(clamp(30px, 15vw, 75px) * -1)',
              aspectRatio: '1/1',
              bgcolor: 'secondary.main',
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
            <CardTitle>{user.name}</CardTitle>
            <Typography variant="subtitle1">{user.username}</Typography>
          </Box>
        </Box>
        <CardContent></CardContent>
      </Card>
      <SessionTitle>Added blogs</SessionTitle>
      <BlogList blogs={user.blogs} blogOwner={user} />
    </Box>
  )
}

export default User
