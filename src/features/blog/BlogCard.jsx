import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Collapse,
  Chip,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import FavoriteIcon from '@mui/icons-material/Favorite'

import { useAuth } from '@/features/auth'
import { useLikeBlogMutation, useDeleteBlogMutation } from '@/features/blog'
import { setErrorAlert, setAlert, ALERT_TYPES } from '@/features/alert'
import { CardTitle, YesNoDialog, ExpandMoreButton } from '@/features/ui'

const BlogCard = ({ blog, blogOwner }) => {
  const dispatch = useDispatch()
  const [likeBlog, { isLoading: isLikeLoading }] = useLikeBlogMutation()
  const [deleteBlog] = useDeleteBlogMutation()
  const [openConfirmRemove, setOpenConfirmRemove] = React.useState(false)
  const [detailsVisible, setDetailsVisible] = React.useState(false)

  const { user: loggedUser } = useAuth()

  const owner = blogOwner || blog.user
  const isBlogOwner = owner.username === loggedUser.username

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

  if (!blog) {
    return null
  }

  return (
    <Box>
      <YesNoDialog
        open={openConfirmRemove}
        onYes={() => removeBlog(blog)}
        onNo={() => setOpenConfirmRemove(false)}
        title="Confirmação"
        message={`Deseja remover o blog '${blog.title}'`}
      />

      <Card
        sx={{ mt: 2, height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          title={blog.title}
          image={`https://picsum.photos/seed/${blog.id}/600/150`}
          sx={{
            aspectRatio: '4/1',
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <BlogHeader {...{ blog }} />
            <ExpandMoreButton
              expand={detailsVisible}
              onClick={() => {
                setDetailsVisible(!detailsVisible)
              }}
            />
          </Box>

          <Collapse in={detailsVisible} timeout="auto" unmountOnExit>
            <BlogDetails blog={blog} blogOwner={owner} />
          </Collapse>
        </CardContent>
        <Collapse in={detailsVisible} timeout="auto" unmountOnExit>
          <CardActions>
            {detailsVisible && isBlogOwner && (
              <Button
                color="error"
                onClick={() => {
                  setOpenConfirmRemove(true)
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
          </CardActions>
        </Collapse>
      </Card>
    </Box>
  )
}
const BlogHeader = ({ blog }) => {
  return (
    <Box>
      <CardTitle>{blog.title}</CardTitle>
      <Box
        sx={{
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        <Typography
          variant="subtitle1"
          fontStyle="italic"
          color="text.secondary"
        >
          by {blog.author}
        </Typography>
        <Chip icon={<FavoriteIcon />} label={blog.likes} size="small" />
      </Box>
    </Box>
  )
}

const BlogDetails = ({ blog, blogOwner }) => {
  return (
    <Box
      sx={{
        mt: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
      }}
    >
      <Typography variant="subtitle1">URL:</Typography>
      <Typography variant="caption" color="secondary" pl={2}>
        <Link
          className="url"
          color="inherit"
          href={blog.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {blog.url}
        </Link>
      </Typography>
      <Typography variant="subtitle1">Added by: </Typography>
      <Typography variant="body2" color="secondary" pl={2}>
        <Link
          className="url"
          color="inherit"
          href={`/users/${blogOwner.username}`}
        >
          {blogOwner.name}
        </Link>
      </Typography>
    </Box>
  )
}

BlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    user: PropTypes.oneOfType([
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      }),
      PropTypes.string,
    ]).isRequired,
  }).isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
}

export default BlogCard
