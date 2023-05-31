import { BlogList } from '@/features/blog'
import React from 'react'

import { BlogForm } from '@/features/blog'
import { PageTitle, Togglable } from '@/features/ui'

const HomePage = () => {
  const blogFormRef = React.useRef()

  return (
    <div>
      <PageTitle title="Blog List" />

      <Togglable buttonLabel="New blog" ref={blogFormRef}>
        <BlogForm />
      </Togglable>

      <BlogList />
    </div>
  )
}

export default HomePage
