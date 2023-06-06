import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Button,
} from '@mui/material'

import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'

const UserMenu = ({ user, logout }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    logout()
    handleClose()
  }

  return (
    <Box
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
    >
      {user ? (
        <Box>
          {user.username}
          <MenuButton onClick={handleOpenMenu}>
            <PersonIcon />
          </MenuButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 2,
                },
              },
            }}
          >
            <MenuItem
              onClick={handleClose}
              component={Link}
              to={`/users/${user.username}`}
            >
              <Avatar /> Profile
            </MenuItem>

            <Divider />
            <MenuItem onClick={handleLogout}>
              <Avatar>
                <LogoutIcon />
              </Avatar>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <Button
          component={Link}
          to="/login"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography>Login</Typography>
          <LoginIcon />
        </Button>
      )}
    </Box>
  )
}

const MenuButton = ({ children, onClick }) => {
  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={onClick}
      color="inherit"
    >
      {children}
    </IconButton>
  )
}

export default UserMenu
