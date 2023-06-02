import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Link } from '@/features/ui'

const UserList = ({ users }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Blogs created</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>
              <Link to={`/users/${user.username}`}>{user.name}</Link>
            </TableCell>
            <TableCell>{user.blogs.length}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default UserList
