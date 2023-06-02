import { Route, Routes, useMatch } from 'react-router-dom'

import { PrivateOutlet } from '@/features/auth'
import { Template } from '@/features/layout'
import AboutPage from '@/pages/AboutPage'
import BlogsPage from '@/pages/BlogsPage'
import LoginPage from '@/pages/LoginPage'
import UsersPage from '@/pages/UsersPage'
import UserPage from '@/pages/UserPage'

const IndexPage = () => {
  const matchUser = useMatch('/users/:username')
  const username = matchUser?.params.username

  return (
    <Template>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route index element={<BlogsPage />} />
        </Route>
        <Route path="/blogs" element={<PrivateOutlet />}>
          <Route index element={<BlogsPage />} />
        </Route>
        <Route path="/users" element={<PrivateOutlet />}>
          <Route index element={<UsersPage />} />
        </Route>
        <Route
          path="/users/:username"
          element={<UserPage username={username} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Template>
  )
}

export default IndexPage
