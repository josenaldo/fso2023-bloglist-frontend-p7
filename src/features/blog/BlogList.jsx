import React from 'react'
import { Box } from '@mui/material'

import { BlogCard } from '@/features/blog'
import { NoItemsFound } from '@/features/ui'

const BlogList = ({ blogs, blogOwner }) => {
  const blogCount = blogs.length

  function calculateGridTemplateColumn(blogCount) {
    if (blogCount >= 1 && blogCount <= 3) {
      return `repeat(${blogCount}, 1fr)`
    }

    return 'repeat(auto-fill, minmax(300px, 1fr))'
  }

  const gridTemplateColumns = calculateGridTemplateColumn(blogCount)

  if (!blogs) return null

  if (blogs.length === 0) return <NoItemsFound />

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: gridTemplateColumns,

        gap: '1rem',
      }}
    >
      {blogs &&
        blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} blogOwner={blogOwner} />
        ))}
    </Box>
  )
}

export default BlogList
