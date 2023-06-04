import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { Box, Card, CardActions, CardContent, TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import { useCommentBlogMutation } from '@/features/blog'
import { setErrorAlert, setAlert, ALERT_TYPES } from '@/features/alert'

import { CardTitle } from '@/features/ui'

const BlogCommentForm = ({ blog }) => {
  const dispatch = useDispatch()
  const [commentBlog, { isLoading }] = useCommentBlogMutation()

  const [content, setContent] = useState('')

  const handleCommentBlog = async (event) => {
    event.preventDefault()
    try {
      await commentBlog({ id: blog.id, content }).unwrap()

      dispatch(
        setAlert({
          type: ALERT_TYPES.SUCCESS,
          message: 'New comment added',
          details: `A new comment added: '${content}'`,
        })
      )

      setContent('')
    } catch (error) {
      dispatch(
        setErrorAlert({
          message: 'Error commenting blog. Please try again.',
          details: error.errorMessage,
          error,
        })
      )
    }
  }

  return (
    <form onSubmit={handleCommentBlog}>
      <Card elevation={1}>
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <CardTitle>Add a comment</CardTitle>
            <TextField
              id="content"
              type="text"
              value={content}
              name="content"
              label="Comment"
              onChange={({ target }) => setContent(target.value)}
            />
          </Box>
        </CardContent>
        <CardActions>
          <LoadingButton id="add-comment" type="submit" loading={isLoading}>
            Send
          </LoadingButton>
        </CardActions>
      </Card>
    </form>
  )
}

export default BlogCommentForm
