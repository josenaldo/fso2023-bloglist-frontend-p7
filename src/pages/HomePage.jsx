import React from 'react'

import { BlogForm, BlogList } from '@/features/blog'
import { LoginForm, UserAppbar } from '@/features/user'

import { useSelector } from 'react-redux'

import { Togglable } from '@/features/ui'

const HomePage = () => {
  const user = useSelector((state) => state.userApi.user)
  console.log('🔴 User', user)

  const blogFormRef = React.useRef()

  return (
    <div>
      <h1>Blog list</h1>

      {!user ? (
        <LoginForm />
      ) : (
        <div>
          <UserAppbar />

          <Togglable buttonLabel="New blog" ref={blogFormRef}>
            <BlogForm />
          </Togglable>

          <BlogList />
        </div>
      )}
    </div>
  )
}

export default HomePage
