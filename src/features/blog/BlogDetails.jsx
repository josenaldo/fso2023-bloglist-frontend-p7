import { Link } from '@/features/ui'
import { Box, Typography } from '@mui/material'

const BlogDetails = ({ blog }) => {
  return (
    <Box
      sx={{
        mt: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <Typography variant="h6">URL:</Typography>
      <Typography variant="subtitle1" color="secondary" pl={2}>
        <Link to={blog.url} target="_blank" rel="noopener noreferrer">
          {blog.url}
        </Link>
      </Typography>
      <Typography variant="H6">Added by: </Typography>
      <Typography variant="subtitle1" color="secondary" pl={2}>
        <Link to={`/users/${blog.user.username}`}>{blog.user.name}</Link>
      </Typography>
    </Box>
  )
}

export default BlogDetails
