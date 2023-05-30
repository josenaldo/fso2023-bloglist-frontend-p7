import { Link } from 'react-router-dom'
import {
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

const drawerWidth = 240

const MobileMenu = ({
  navItems,
  user,
  logout,
  mobileOpen,
  handleDrawerToggle,
}) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Notes Router MUI
      </Typography>

      <Divider />

      <List>
        {navItems.map((item) => (
          <MobileMenuItem key={item.link} item={item} />
        ))}
        {user ? (
          <MobileMenuItem
            item={{
              icon: LogoutIcon,
              text: `${user.name} logged in`,
              onClick: logout,
            }}
          />
        ) : (
          <MobileMenuItem
            item={{
              icon: LoginIcon,
              text: 'Login',
              link: '/login',
            }}
          />
        )}
      </List>
    </Box>
  )
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
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

const MobileMenuItem = ({ item }) => {
  const buttonProps = item.onClick
    ? { onClick: item.onClick }
    : { component: Link, to: item.link }

  return (
    <ListItem disablePadding>
      <ListItemButton {...buttonProps} component={Link}>
        <ListItemIcon>
          <item.icon />
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  )
}

export default MobileMenu
