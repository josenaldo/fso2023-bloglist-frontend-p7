import { SessionTitle, Togglable } from '@/features/ui'
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import BlogCommentForm from '@/features/blog/BlogCommentForm'

const BlogComments = ({ blog }) => {
  return (
    <Box>
      <SessionTitle>Comments</SessionTitle>

      <Stack gap={5}>
        <Togglable buttonLabel="Add a comment">
          <BlogCommentForm blog={blog} />
        </Togglable>

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
