import React from 'react'

import { BlogForm, BlogList } from '@/features/blog'
import { Togglable } from '@/features/ui'

const HomePage = () => {
  const blogFormRef = React.useRef()

  return (
    <div>
      <h1>Blog list</h1>

      <Togglable buttonLabel="New blog" ref={blogFormRef}>
        <BlogForm />
      </Togglable>

      <BlogList />
    </div>
  )
}

export default HomePage
