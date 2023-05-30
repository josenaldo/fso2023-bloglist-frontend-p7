import React from 'react'

import { BlogForm, BlogList } from '@/features/blog'
import { UserAppbar } from '@/features/auth'
import { Togglable } from '@/features/ui'

const HomePage = () => {
  const blogFormRef = React.useRef()

  return (
    <div>
      <h1>Blog list</h1>

      <UserAppbar />

      <Togglable buttonLabel="New blog" ref={blogFormRef}>
        <BlogForm />
      </Togglable>

      <BlogList />
    </div>
  )
}

export default HomePage
