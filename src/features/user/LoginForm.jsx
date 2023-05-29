import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ login }) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    login({ username, password })
    setUsername('')
    setPassword('')
  }

  return (
    <article>
      <form onSubmit={handleLogin}>
        <div className="grid">
          <label>
            Username
            <input
              id="username"
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </label>
          <label>
            Password
            <input
              id="password"
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
        </div>
        <button id="login-button" type="submit">
          Login
        </button>
      </form>
    </article>
  )
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginForm
