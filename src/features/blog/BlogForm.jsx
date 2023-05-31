import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, Card, CardActions, CardContent, TextField } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import { useCreateBlogMutation } from '@/features/blog'
import { setErrorAlert, setAlert, ALERT_TYPES } from '@/features/alert'

const BlogForm = () => {
  const dispatch = useDispatch()
  const [createBlog, { isLoading }] = useCreateBlogMutation()

  const [title, setTitle] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [url, setUrl] = React.useState('')

  const handleCreateBlog = async (event) => {
    event.preventDefault()
    try {
      const blog = { title, author, url }
      const newBlog = await createBlog(blog).unwrap()

      dispatch(
        setAlert({
          type: ALERT_TYPES.SUCCESS,
          message: 'New blog added',
          details: `A new blog added: '${newBlog.title}'`,
        })
      )

      setTitle('')
      setAuthor('')
      setUrl('')
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

  return (
    <form onSubmit={handleCreateBlog}>
      <Card elevation={1}>
        <CardContent>
          <h2>Create a new blog</h2>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <TextField
              id="title"
              type="text"
              value={title}
              name="title"
              label="Title"
              onChange={({ target }) => setTitle(target.value)}
            />
            <TextField
              id="author"
              type="text"
              value={author}
              name="author"
              label="Author"
              onChange={({ target }) => setAuthor(target.value)}
            />
            <TextField
              id="url"
              type="text"
              value={url}
              name="url"
              label="URL"
              onChange={({ target }) => setUrl(target.value)}
            />
          </Box>
        </CardContent>
        <CardActions>
          <LoadingButton
            id="create-blog-button"
            type="submit"
            loading={isLoading}
          >
            Create
          </LoadingButton>
        </CardActions>
      </Card>
    </form>
  )
}

export default BlogForm
