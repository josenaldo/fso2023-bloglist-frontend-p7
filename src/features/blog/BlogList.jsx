import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { blogService, BlogForm, Blog } from '@/features/blog'
import { Togglable } from '@/features/ui'

import { setErrorAlert, setAlert, ALERT_TYPES } from '@/features/alert'

const BlogList = ({ user }) => {
  const dispatch = useDispatch()
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

      dispatch(
        setAlert({
          type: ALERT_TYPES.SUCCESS,
          message: 'New blog added',
          details: `A new blog added: '${blog.title}'`,
        })
      )
    } catch (error) {
      dispatch(
        setErrorAlert({
          message: 'Error creating blog. Please try again.',
          details: error.errorMessage,
          error,
        })
      )
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
      dispatch(
        setErrorAlert({
          message: 'Error liking blog. Please try again.',
          details: error.errorMessage,
          error,
        })
      )
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

      dispatch(
        setAlert({
          type: ALERT_TYPES.SUCCESS,
          message: 'Blog removed',
          details: `Blog '${blog.title}' removed.`,
        })
      )
    } catch (error) {
      dispatch(
        setErrorAlert({
          message: 'Error removing blog. Please try again.',
          details: error.errorMessage,
          error,
        })
      )
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
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
}

export default BlogList
