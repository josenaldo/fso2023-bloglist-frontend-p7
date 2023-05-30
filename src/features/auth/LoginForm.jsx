import React from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '@/features/auth'
import { ALERT_TYPES, setAlert, setErrorAlert } from '@/features/alert'
import { LoadingButton } from '@mui/lab'
import { Card, CardActions, CardContent, Stack, TextField } from '@mui/material'

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const user = await login({ username, password }).unwrap()

      dispatch(
        setAlert({
          type: ALERT_TYPES.SUCCESS,
          message: 'User logged in successfully.',
          detail: `Welcome ${user.username}`,
        })
      )

      navigate('/')
    } catch (error) {
      setUsername('')
      setPassword('')

      dispatch(
        setErrorAlert({
          message: 'Error',
          details: 'Error logging in. Please try again.',
          error,
        })
      )
    }
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
