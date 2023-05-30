import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@/features/auth'

const PrivateOutlet = () => {
  const auth = useAuth()
  const location = useLocation()

  console.log('🔴 PrivateOutlet > auth', auth)
  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  )
}

export default PrivateOutlet
