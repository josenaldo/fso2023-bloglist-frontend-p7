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
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from '@/features/ui'

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
          <Typography variant="h5">{user.name}</Typography>
          <Typography variant="subtitle1">{user.username}</Typography>
        </Box>
      </Box>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Título</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>URL</TableCell>
              <TableCell>Likes</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {user.blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>
                  <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>
                  <Link to={blog.url} target="_blank" rel="noopener noreferer">
                    {blog.url}
                  </Link>
                </TableCell>
                <TableCell>{blog.likes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default User
