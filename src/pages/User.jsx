import { PageTitle } from '@/features/ui'
import { Box } from '@mui/material'

import { useGetUserQuery } from '@/features/user'
import { Loading } from '@/features/ui'

const UserPage = ({ userId }) => {
  if (!userId) {
    return <Box>Invalid user id</Box>
  }

  const { data: user, isLoading } = useGetUserQuery(userId)

  return (
    <Box>
      <PageTitle title="Users" />
      {isLoading ? <Loading /> : <Box>{user.name}</Box>}
    </Box>
  )
}

export default UserPage
