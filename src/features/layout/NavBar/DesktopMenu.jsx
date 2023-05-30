import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'

const DesktopMenu = ({ navItems, user, logout }) => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
      {navItems.map((item) => (
        <DesktopMenuItem key={item.link} item={item} />
      ))}

      <UserButton user={user} logout={logout} />
    </Box>
  )
}

const UserButton = ({ user, logout }) => {
  return (
    <>
      {user ? (
        <DesktopMenuItem
          item={{
            icon: LogoutIcon,
            text: `${user.name} logged in`,
            onClick: logout,
          }}
          showIcon={true}
        />
      ) : (
        <DesktopMenuItem
          item={{
            icon: LoginIcon,
            text: 'Login',
            link: '/login',
          }}
          showIcon={true}
        />
      )}
    </>
  )
}

const DesktopMenuItem = ({ item, showIcon = false }) => {
  const buttonProps = item.onClick
    ? { onClick: item.onClick }
    : { component: Link, to: item.link }

  if (showIcon && item.icon) {
    buttonProps.endIcon = <item.icon />
  }

  return <Button {...buttonProps}>{item.text}</Button>
}

export default DesktopMenu
