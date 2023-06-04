import { SessionTitle } from '@/features/ui'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

const BlogComments = ({ blog }) => {
  console.log('🔴 Comments', blog.comments)
  return (
    <Box>
      <SessionTitle>BlogComments</SessionTitle>

      <Stack gap={5}>
        {blog.comments.map((comment) => (
          <Card key={comment.id} variant="comment">
            <CardContent
              sx={{
                display: 'flex',
                gap: '1rem',
              }}
            >
              <Avatar>
                <PersonIcon />
              </Avatar>
              <Typography>{comment.content}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}
export default BlogComments
