import { Box } from '@mui/material'

import { appConfig, pages } from '@/data'
import { PageTitle } from '@/features/ui'
import { HomeMenu } from '@/features/home'
import { useAuth } from '@/features/auth'

const HomePage = () => {
  const { user } = useAuth()

  return (
    <Box>
      <PageTitle>{`Welcome to ${appConfig.application.name}`}</PageTitle>
      <HomeMenu pages={pages} user={user} />
    </Box>
  )
}

export default HomePage
