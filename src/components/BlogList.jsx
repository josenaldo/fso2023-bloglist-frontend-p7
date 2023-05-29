import React from 'react'
import PropTypes from 'prop-types'

import blogService from '@/services/blogs'

import { ALERT_TYPE } from '@/components/Alert'
import ErrorUtils from '@/utils/ErrorUtils'

import Blog from '@/components/Blog'
import BlogForm from '@/components/BlogForm'
import Togglable from './Togglable'

const BlogList = ({ setMessage, user }) => {
  const [blogs, setBlogs] = React.useState([])
  const blogFormRef = React.useRef()

  const sortBlogs = (blogs) => {
    return blogs.sort((a, b) => b.likes - a.likes)
  }

  React.useEffect(() => {
    const fetchBlogs = async () => {
      const blogs = await blogService.getAll()
      setBlogs(sortBlogs(blogs))
    }

    fetchBlogs()
  }, [])

  const createBlog = async (blog) => {
    try {
      const newBlog = await blogService.create(blog)

      const newBlogList = [...blogs, newBlog]

      setBlogs(sortBlogs(newBlogList))

      setMessage({
        type: ALERT_TYPE.SUCCESS,
        content: `A new blog added: '${blog.title}'`,
      })
    } catch (error) {
      const errorMessage = ErrorUtils.handleAxiosError(
        error,
        'Error creating blog. Please try again.'
      )

      setMessage(errorMessage)
    }
  }

  const like = async (blog) => {
    try {
      const likedBlog = await blogService.like(blog)

      const updatedBlogs = blogs.map((b) => {
        return b.id === blog.id ? likedBlog : b
      })

      setBlogs(sortBlogs(updatedBlogs))
    } catch (error) {
      const errorMessage = ErrorUtils.handleAxiosError(
        error,
        'Error liking blog. Please try again.'
      )

      setMessage(errorMessage)
    }
  }

  const removeBlog = async (blog) => {
    const confirmRemove = confirm(`Remove blog '${blog.title}'?`)

    if (!confirmRemove) {
      return
    }

    try {
      await blogService.remove(blog)

      const updatedBlogs = blogs.filter((b) => b.id !== blog.id)

      setBlogs(sortBlogs(updatedBlogs))

      setMessage({
        type: ALERT_TYPE.SUCCESS,
        content: `Blog '${blog.title}' removed.`,
      })
    } catch (error) {
      const errorMessage = ErrorUtils.handleAxiosError(
        error,
        'Error removing blog. Please try again.'
      )

      setMessage(errorMessage)
    }
  }

  return (
    <div>
      <Togglable buttonLabel="New blog" ref={blogFormRef}>
        <BlogForm createBlog={createBlog} />
      </Togglable>
      {blogs &&
        blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            like={async () => {
              return like(blog)
            }}
            remove={async () => {
              return removeBlog(blog)
            }}
            user={user}
          />
        ))}
    </div>
  )
}

BlogList.propTypes = {
  setMessage: PropTypes.func.isRequired,
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
}

export default BlogList
