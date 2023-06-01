import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import { pages } from '@/data'

const DesktopMenu = ({ user }) => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
      {pages.map((page) => {
        const shoulRenderItem = (page.protected && user) || !page.protected

        if (shoulRenderItem) {
          const linkProps = {
            to: page.to,
            component: Link,
          }
          return (
            <Button key={page.to} {...linkProps}>
              {page.text}
            </Button>
          )
        }

        return null
      })}
    </Box>
  )
}

export default DesktopMenu
