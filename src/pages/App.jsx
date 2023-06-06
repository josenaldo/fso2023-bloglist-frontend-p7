import { Route, Routes, useMatch } from 'react-router-dom'

import { PrivateOutlet } from '@/features/auth'
import { Template } from '@/features/layout'
import AboutPage from '@/pages/AboutPage'
import BlogsPage from '@/pages/BlogsPage'
import LoginPage from '@/pages/LoginPage'
import UsersPage from '@/pages/UsersPage'
import UserPage from '@/pages/UserPage'
import BlogPage from '@/pages/BlogPage'
import HomePage from '@/pages/HomePage'

const IndexPage = () => {
  const matchUser = useMatch('/users/:username')
  const username = matchUser?.params.username

  const matchBlog = useMatch('/blogs/:id')
  const blogId = matchBlog?.params.id

  return (
    <Template>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:username" element={<BlogPage blogId={blogId} />} />

        <Route path="/users" element={<PrivateOutlet />}>
          <Route index element={<UsersPage />} />
        </Route>

        <Route path="/users/:username" element={<PrivateOutlet />}>
          <Route index element={<UserPage username={username} />} />
        </Route>
      </Routes>
    </Template>
  )
}

export default IndexPage
