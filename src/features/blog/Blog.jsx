import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  Paper,
  Typography,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'

import { useAuth } from '@/features/auth'
import { useLikeBlogMutation, useDeleteBlogMutation } from '@/features/blog'
import { setErrorAlert, setAlert, ALERT_TYPES } from '@/features/alert'
import './Blog.css'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  const auth = useAuth()
  const [likeBlog, { isLoading: isLikeLoading }] = useLikeBlogMutation()
  const [deleteBlog] = useDeleteBlogMutation()

  const [detailsVisible, setDetailsVisible] = React.useState(false)
  const buttonLabel = detailsVisible ? 'Hide' : 'View'

  const isBlogOwner = blog.user.username === auth.user.username

  const handleLike = async (blog) => {
    try {
      likeBlog(blog.id)
      dispatch(
        setAlert({
          type: ALERT_TYPES.INFO,
          message: 'Blog liked',
          details: `Blog '${blog.title}' liked.`,
        })
      )
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
      deleteBlog(blog.id)

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
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <Box>
          <Typography variant="h5" component="div" gutterBottom>
            {blog.title}
          </Typography>
          <Typography
            variant="subtitle1"
            fontStyle="italic"
            color="text.secondary"
          >
            by {blog.author}
          </Typography>
        </Box>

        {detailsVisible && (
          <Paper
            sx={{
              mt: 3,
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '0.5rem',
              padding: '1rem',
              borderRadius: '0.5rem',
            }}
            elevation={7}
          >
            <Typography variant="body2">URL:</Typography>
            <Link
              className="url"
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {blog.url}
            </Link>

            <Typography variant="body2">Likes:</Typography>
            <Typography variant="body2">{blog.likes}</Typography>

            <Typography variant="body2">Added by: </Typography>
            <Typography variant="body2">{blog.user.name}</Typography>
          </Paper>
        )}
      </CardContent>
      <CardActions>
        {detailsVisible && isBlogOwner && (
          <Button
            color="error"
            onClick={() => {
              removeBlog(blog)
            }}
          >
            Remove
          </Button>
        )}

        {detailsVisible && (
          <LoadingButton
            color="primary"
            loading={isLikeLoading}
            onClick={() => {
              handleLike(blog)
            }}
          >
            Like
          </LoadingButton>
        )}

        <Button
          onClick={() => {
            setDetailsVisible(!detailsVisible)
          }}
          color={detailsVisible ? 'secondary' : 'primary'}
          sx={{}}
        >
          {buttonLabel}
        </Button>
      </CardActions>
    </Card>
  )
}

Blog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
}

export default Blog
