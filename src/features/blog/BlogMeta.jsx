import { Box, Typography, Chip } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

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

      <Chip icon={<FavoriteIcon />} label={blog.likes} size="small" />
    </Box>
  )
}

export default BlogMeta
