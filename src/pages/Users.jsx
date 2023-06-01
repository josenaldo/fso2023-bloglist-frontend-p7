import { PageTitle } from '@/features/ui'
import { Box } from '@mui/material'
import { UserList } from '@/features/user'
import { useGetUsersQuery } from '@/features/user'
import { Loading } from '@/features/ui'

const UsersPage = () => {
  const { data: users, isLoading } = useGetUsersQuery()

  if (isLoading) {
    return <Loading />
  }

  return (
    <Box>
      <PageTitle title="Users" />
      <UserList users={users} />
    </Box>
  )
}

export default UsersPage
