import { PageTitle } from '@/features/ui'
import { Box } from '@mui/material'

import { User, useGetUserProfileQuery } from '@/features/user'
import { Loading } from '@/features/ui'
import { useAuth } from '@/features/auth'

const BlogPage = ({ blogId }) => {
  const { user: loggedUser } = useAuth()

  if (!username) {
    return <Box>Invalid username</Box>
  }

  const { data: user, isLoading } = useGetUserProfileQuery(username)

  return (
    <Box>
      <PageTitle title="Profile" />
      {isLoading ? <Loading /> : <User user={user} loggedUser={loggedUser} />}
    </Box>
  )
}

export default BlogPage
