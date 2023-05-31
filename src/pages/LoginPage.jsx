import { LoginForm } from '@/features/auth'
import { PageTitle } from '@/features/ui'
import { Box } from '@mui/material'

const LoginPage = () => {
  return (
    <Box>
      <PageTitle title="Login" />
      <LoginForm />
    </Box>
  )
}

export default LoginPage
