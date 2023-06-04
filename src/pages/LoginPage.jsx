import { LoginForm } from '@/features/auth'
import { PageTitle } from '@/features/ui'
import { Box } from '@mui/material'

const LoginPage = () => {
  return (
    <Box>
      <PageTitle>Login</PageTitle>
      <LoginForm />
    </Box>
  )
}

export default LoginPage
