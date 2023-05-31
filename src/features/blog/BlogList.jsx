import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Blog } from '@/features/blog'

import { useGetBlogsQuery } from '@/features/blog'
import { Box } from '@mui/material'

const BlogList = () => {
  const user = useSelector((state) => state.userApi.user)
  const { data: blogs, isLoading } = useGetBlogsQuery()

  // const sortBlogs = (blogs) => {
  //   return blogs.sort((a, b) => b.likes - a.likes)
  // }

  // React.useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const blogs = await blogService.getAll()
  //     setBlogs(sortBlogs(blogs))
  //   }

  //   fetchBlogs()
  // }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

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
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
}

export default BlogList
