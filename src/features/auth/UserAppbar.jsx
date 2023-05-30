import React from 'react'
import { useDispatch } from 'react-redux'
import { useLogoutMutation } from '@/features/auth'

import { useAuth } from '@/features/auth'

const UserAppbar = () => {
  const dispatch = useDispatch()
  const auth = useAuth()

  const [logout] = useLogoutMutation()

  const handleLogout = () => {
    dispatch(logout())
  }

  if (!auth.user) return null

  return (
    <div>
      Welcome {auth.user.name}!{' '}
      <a
        href="#"
        role="button"
        className="outline small"
        onClick={handleLogout}
      >
        Logout
      </a>
    </div>
  )
}

export default UserAppbar
