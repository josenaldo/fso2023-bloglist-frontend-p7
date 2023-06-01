import { BlogList } from '@/features/blog'
import React from 'react'

import { BlogForm } from '@/features/blog'
import { PageTitle, Togglable, Loading } from '@/features/ui'
import { useGetBlogsQuery } from '@/features/blog'
import { useAuth } from '@/features/auth'

const HomePage = () => {
  const { user } = useAuth()
  const { data: blogs, isLoading } = useGetBlogsQuery()
  const blogFormRef = React.useRef()

  return (
    <div>
      <PageTitle title="Blog List" />

      <Togglable buttonLabel="New blog" ref={blogFormRef}>
        <BlogForm />
      </Togglable>

      {isLoading ? <Loading /> : <BlogList blogs={blogs} user={user} />}
    </div>
  )
}

export default HomePage
