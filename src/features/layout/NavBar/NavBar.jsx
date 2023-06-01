import React from 'react'

import {
  AppBar,
  IconButton,
  Toolbar,
  Link as MuiLink,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import Logo from './Logo'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth, logout } from '@/features/auth'
import { useDispatch } from 'react-redux'
import UserMenu from '@/features/layout/NavBar/UserMenu'

const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useAuth()

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const handleLogout = async () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <AppBar component="nav" position="sticky">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <MuiLink
            component={Link}
            to="/"
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            <Logo />
          </MuiLink>
          <DesktopMenu user={auth.user} logout={handleLogout} />
        </Box>

        <UserMenu user={auth.user} logout={handleLogout} />
      </Toolbar>

      <MobileMenu
        user={auth.user}
        logout={handleLogout}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </AppBar>
  )
}

export default NavBar
