import React from 'react'

import { AppBar, IconButton, Toolbar, Link as MuiLink } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import Logo from './Logo'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'
import { Link } from 'react-router-dom'

const NavBar = ({ user, logout }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  return (
    <AppBar component="nav" position="sticky">
      <Toolbar>
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

        <DesktopMenu user={user} logout={logout} />
      </Toolbar>

      <MobileMenu
        user={user}
        logout={logout}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </AppBar>
  )
}

export default NavBar
