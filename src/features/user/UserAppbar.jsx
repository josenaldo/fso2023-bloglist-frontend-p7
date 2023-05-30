import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLogoutMutation } from '@/features/user'

const UserAppbar = () => {
  const dispatch = useDispatch()
  const [logout] = useLogoutMutation()
  const user = useSelector((state) => state.userApi.user)

  const handleLogout = () => {
    dispatch(logout())
  }

  if (!user) return null

  return (
    <div>
      Welcome {user.name}!{' '}
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
