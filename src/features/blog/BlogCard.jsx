import React from 'react'

import { Box, Card, CardActions, CardContent } from '@mui/material'

import { useAuth } from '@/features/auth'
import { BlogImage, BlogCardHeader, BlogActions } from '@/features/blog'

const BlogCard = ({ blog, blogOwner }) => {
  const { user } = useAuth()

  const owner = blogOwner || blog?.user || null
  const isBlogOwner = owner?.username === user?.username

  if (!blog) {
    return null
  }

  return (
    <Box>
      <Card
        sx={{ mt: 2, height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <BlogImage
          blog={blog}
          image={`https://picsum.photos/seed/${blog.id}/600/150`}
        />

        <CardContent
          sx={{
            flexGrow: 1,
          }}
        >
          <BlogCardHeader blog={blog} />
        </CardContent>

        {user && (
          <CardActions>
            <BlogActions blog={blog} isBlogOwner={isBlogOwner} />
          </CardActions>
        )}
      </Card>
    </Box>
  )
}

export default BlogCard
