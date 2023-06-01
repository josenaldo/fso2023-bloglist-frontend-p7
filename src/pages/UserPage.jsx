import { PageTitle } from '@/features/ui'
import { Box } from '@mui/material'

import { User, useGetUserQuery } from '@/features/user'
import { Loading } from '@/features/ui'

const UserPage = ({ userId }) => {
  if (!userId) {
    return <Box>Invalid user id</Box>
  }

  const { data: user, isLoading } = useGetUserQuery(userId)

  return (
    <Box>
      <PageTitle title="Profile" />
      {isLoading ? <Loading /> : <User user={user} />}
    </Box>
  )
}

export default UserPage
