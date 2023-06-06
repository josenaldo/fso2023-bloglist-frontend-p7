import React from 'react'

import { Box, Card, CardActions, CardContent } from '@mui/material'

import { useAuth } from '@/features/auth'
import {
  BlogHeader,
  BlogImage,
  BlogActions,
  BlogDetails,
  BlogComments,
} from '@/features/blog'

const Blog = ({ blog }) => {
  const { user } = useAuth()

  const owner = blog.user
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
          image={`https://picsum.photos/seed/${blog.id}/1200/300`}
        />

        <CardContent
          sx={{
            flexGrow: 1,
          }}
        >
          <BlogHeader blog={blog} />
          <BlogDetails blog={blog} blogOwner={owner} />
        </CardContent>
        {user && (
          <CardActions>
            <BlogActions blog={blog} isBlogOwner={isBlogOwner} />
          </CardActions>
        )}
      </Card>

      <BlogComments blog={blog} />
    </Box>
  )
}

export default Blog
