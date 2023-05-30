import React from 'react'
import { useDispatch } from 'react-redux'

import { useCreateBlogMutation } from '@/features/blog'
import { setErrorAlert, setAlert, ALERT_TYPES } from '@/features/alert'

const BlogForm = () => {
  const dispatch = useDispatch()
  const [createBlog] = useCreateBlogMutation()

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
      <h2>Create a new blog</h2>
      <div className="grid">
        <label>
          Title
          <input
            id="title"
            type="text"
            name="Title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </label>
        <label>
          Author
          <input
            id="author"
            type="text"
            name="Author"
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </label>
        <label>
          Url
          <input
            id="url"
            type="text"
            name="Url"
            value={url}
            onChange={({ target }) => setUrl(target.value)}
          />
        </label>
      </div>
      <button id="create-blog-button" type="submit">
        Create
      </button>
    </form>
  )
}

export default BlogForm
