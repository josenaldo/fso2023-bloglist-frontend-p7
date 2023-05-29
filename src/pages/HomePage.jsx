import React from 'react'
import { useDispatch } from 'react-redux'

import { appConfig } from '@/data'
import { BlogList, blogService } from '@/features/blog'
import { LoginForm, UserAppbar, loginService } from '@/features/user'
import { setErrorAlert } from '@/features/alert'

const HomePage = () => {
  const [user, setUser] = React.useState(null)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem(
      appConfig.LOGGED_USER_KEY
    )

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    } else {
      setUser(null)
      blogService.setToken(null)
    }
  }, [])

  const login = async ({ username, password }) => {
    try {
      const user = await loginService.login({ username, password })

      window.localStorage.setItem(
        appConfig.LOGGED_USER_KEY,
        JSON.stringify(user)
      )

      setUser(user)
      blogService.setToken(user.token)
    } catch (exception) {
      setUser(null)
      blogService.setToken(null)
      dispatch(
        setErrorAlert({
          content: 'Incorrect username or password. Please try again.',
          details: exception.message,
          error: exception,
        })
      )
    }
  }

  const logout = () => {
    setUser(null)
    window.localStorage.removeItem(appConfig.LOGGED_USER_KEY)
  }

  return (
    <div>
      <h1>Blog list</h1>

      {user === null ? (
        <LoginForm login={login} />
      ) : (
        <div>
          <UserAppbar user={user} logout={logout} />
          <BlogList user={user} />
        </div>
      )}
    </div>
  )
}

export default HomePage
