import { useNavigate } from 'react-router-dom'

import { useAuth, useLogoutMutation } from '@/features/auth'
import { NavBar } from '@/features/layout'

const Header = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  const [logout] = useLogoutMutation()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return <NavBar user={auth.user} logout={handleLogout} />
}

export default Header
