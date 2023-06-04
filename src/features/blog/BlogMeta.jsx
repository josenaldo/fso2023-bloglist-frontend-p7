import { Box, Typography, Chip } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CommentIcon from '@mui/icons-material/Comment'

const BlogMeta = ({ blog }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '0.5rem',
      }}
    >
      <Typography variant="subtitle1" fontStyle="italic" color="text.secondary">
        by {blog.author}
      </Typography>

      <Chip
        icon={<FavoriteIcon />}
        label={blog.likes}
        size="small"
        sx={{
          px: 0.5,
        }}
      />
      <Chip
        icon={<CommentIcon />}
        label={blog?.comments.length || 0}
        size="small"
        sx={{
          px: 0.5,
        }}
      />
    </Box>
  )
}

export default BlogMeta
