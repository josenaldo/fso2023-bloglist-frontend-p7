import { Route, Routes } from 'react-router-dom'

import { PrivateOutlet } from '@/features/auth'
import { Template } from '@/features/layout'
import AboutPage from '@/pages/AboutPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import UsersPage from '@/pages/Users'

const IndexPage = () => {
  return (
    <Template>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/users" element={<PrivateOutlet />}>
          <Route index element={<UsersPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Template>
  )
}

export default IndexPage
