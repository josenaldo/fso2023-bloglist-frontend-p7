import { Link } from 'react-router-dom'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'

import { pages } from '@/data'

const MobileMenu = ({ user, logout, mobileOpen, handleDrawerToggle }) => {
  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
          },
        }}
      >
        <MenuDrawer
          user={user}
          logout={logout}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
      </Drawer>
    </Box>
  )
}

const MenuDrawer = ({ user, logout, handleDrawerToggle }) => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <UserInfo user={user} />
      <Divider />

      <List>
        {pages.map((page) => {
          const shoulRenderItem = (page.protected && user) || !page.protected

          if (shoulRenderItem) {
            const item = {
              to: page.to,
              component: Link,
              text: page.text,
              icon: page.icon,
            }
            return <MobileMenuItem key={page.to} item={item} />
          }

          return null
        })}

        <Divider />
        {user ? (
          <MobileMenuItem
            item={{
              icon: LogoutIcon,
              text: 'Logout',
              onClick: logout,
            }}
          />
        ) : (
          <MobileMenuItem
            item={{
              icon: LoginIcon,
              text: 'Login',
              to: '/login',
              component: Link,
            }}
          />
        )}
      </List>
    </Box>
  )
}

const MobileMenuItem = ({ item }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton {...item}>
        <ListItemIcon>
          <item.icon />
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  )
}

const UserInfo = ({ user }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        p: 2,
        gap: 2,
      }}
    >
      <Avatar sx={{ bgcolor: 'primary.main' }}>
        {user ? user.name[0] : <PersonIcon />}
      </Avatar>
      <Typography variant="h6" component="div">
        {user ? user.name : 'Guest'}
      </Typography>
    </Box>
  )
}
export default MobileMenu
