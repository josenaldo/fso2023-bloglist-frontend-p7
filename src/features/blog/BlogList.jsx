import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

import { Blog } from '@/features/blog'

const BlogList = ({ blogs, user }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        mt: '2rem',
      }}
    >
      {blogs &&
        blogs.map((blog) => <Blog key={blog.id} blog={blog} user={user} />)}
    </Box>
  )
}

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
}

export default BlogList
