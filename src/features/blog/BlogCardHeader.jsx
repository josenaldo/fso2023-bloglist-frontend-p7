import { BlogMeta } from '@/features/blog'
import { CardTitle, Link } from '@/features/ui'
import { Box } from '@mui/material'

const BlogCardHeader = ({ blog }) => {
  return (
    <Box>
      <CardTitle>
        <Link to={`/blogs/${blog.id}`} variant="cardTitle">
          {blog.title}
        </Link>
      </CardTitle>
      <BlogMeta blog={blog} />
    </Box>
  )
}

export default BlogCardHeader
