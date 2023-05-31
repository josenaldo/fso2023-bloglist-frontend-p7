import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import { pages } from '@/data'

const DesktopMenu = ({ user, logout }) => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
      {pages.map((page) => (
        <DesktopMenuItem key={page.link} item={{ ...page, component: Link }} />
      ))}

      {user ? (
        <DesktopMenuItem
          item={{
            icon: LogoutIcon,
            text: `${user.name} logged in`,
            onClick: logout,
          }}
          showIcon
        />
      ) : (
        <DesktopMenuItem
          item={{
            icon: LoginIcon,
            text: 'Login',
            link: '/login',
            component: Link,
          }}
          showIcon
        />
      )}
    </Box>
  )
}

const DesktopMenuItem = ({ item, showIcon = false }) => {
  const buttonProps = {
    ...item,
    endIcon: showIcon && item.icon ? <item.icon /> : undefined,
  }

  return <Button {...buttonProps}>{item.text}</Button>
}

export default DesktopMenu
