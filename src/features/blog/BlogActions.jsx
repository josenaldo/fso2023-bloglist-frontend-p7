import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Box, Button } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import { YesNoDialog } from '@/features/ui'
import { setErrorAlert, setAlert, ALERT_TYPES } from '@/features/alert'
import { useDeleteBlogMutation, useLikeBlogMutation } from '@/features/blog/'

const BlogActions = ({ blog, isBlogOwner }) => {
  const dispatch = useDispatch()
  const [likeBlog, { isLoading: isLikeLoading }] = useLikeBlogMutation()
  const [deleteBlog] = useDeleteBlogMutation()
  const [openConfirmRemove, setOpenConfirmRemove] = useState(false)

  const handleLike = async (blog) => {
    try {
      await likeBlog(blog.id).unwrap()

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
      await deleteBlog(blog.id).unwrap()

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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <YesNoDialog
        open={openConfirmRemove}
        onYes={() => removeBlog(blog)}
        onNo={() => setOpenConfirmRemove(false)}
        title="Confirmação"
        message={`Deseja remover o blog '${blog.title}'`}
      />
      <LoadingButton
        variant="outlined"
        color="primary"
        loading={isLikeLoading}
        onClick={() => {
          handleLike(blog)
        }}
      >
        Like
      </LoadingButton>
      {isBlogOwner && (
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            setOpenConfirmRemove(true)
          }}
        >
          Remove
        </Button>
      )}
    </Box>
  )
}

export default BlogActions
