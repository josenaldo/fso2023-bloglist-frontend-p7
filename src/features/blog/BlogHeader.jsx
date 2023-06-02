import { BlogMeta } from '@/features/blog'
import { CardTitle, Link } from '@/features/ui'
import { Box } from '@mui/material'

const BlogHeader = ({
  blog,
  variantTitle = 'h1',
  alignItems = 'center',
  showLink = false,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: alignItems,
      }}
    >
      <CardTitle variant={variantTitle}>
        {showLink ? (
          <Link to={`/blogs/${blog.id}`} variant="cardTitle">
            {blog.title}
          </Link>
        ) : (
          <span>{blog.title}</span>
        )}
      </CardTitle>
      <BlogMeta blog={blog} />
    </Box>
  )
}

export default BlogHeader
