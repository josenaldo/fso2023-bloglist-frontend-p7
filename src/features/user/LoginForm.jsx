import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '@/features/user'
import { ALERT_TYPES, setAlert, setErrorAlert } from '@/features/alert'
import { appConfig } from '@/data'
import { LoadingButton } from '@mui/lab'
import { Card, CardActions, CardContent, Stack, TextField } from '@mui/material'

const LoginForm = () => {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state) => state.userApi.user)

  const [login, { isLoading }] = useLoginMutation()

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const user = await login({ username, password }).unwrap()
      console.log('🔴 LoginForm > Logged User', loggedUser)
      console.log('🔴 LoginForm > User', user)

      window.localStorage.setItem(
        appConfig.LOGGED_USER_KEY,
        JSON.stringify(user)
      )

      dispatch(
        setAlert({
          type: ALERT_TYPES.SUCCESS,
          message: 'User logged in successfully.',
          detail: `Welcome ${user.username}`,
        })
      )
    } catch (error) {
      dispatch(
        setErrorAlert({
          message: 'Error',
          details: 'Error logging in. Please try again.',
          error,
        })
      )
    }

    setUsername('')
    setPassword('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent>
          <Stack
            sx={{
              gap: 2,
            }}
          >
            <TextField
              id="username"
              type="text"
              value={username}
              name="username"
              label="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
            <TextField
              id="password"
              type="password"
              value={password}
              name="password"
              label="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </Stack>
        </CardContent>
        <CardActions>
          <LoadingButton type="submit" loading={isLoading}>
            Login
          </LoadingButton>
        </CardActions>
      </Card>
    </form>
  )
}

export default LoginForm
