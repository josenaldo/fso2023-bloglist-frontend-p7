import React from 'react'

import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { pages } from '@/data'

import Logo from './Logo'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

const NavBar = ({ name, user, logout }) => {
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

        <Logo name={name} />

        <DesktopMenu navItems={pages} user={user} logout={logout} />
      </Toolbar>

      <MobileMenu
        navItems={pages}
        user={user}
        logout={logout}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </AppBar>
  )
}

export default NavBar
