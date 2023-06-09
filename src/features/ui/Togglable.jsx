import React from 'react'
import { Box, Button } from '@mui/material'

const Togglable = React.forwardRef(({ buttonLabel, children }, refs) => {
  const [visible, setVisible] = React.useState(false)

  React.useImperativeHandle(refs, () => {
    return {
      toggleVisibility,
    }
  })

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  if (!visible) {
    return (
      <Box>
        <Button variant="outlined" color="primary" onClick={toggleVisibility}>
          {buttonLabel}
        </Button>
      </Box>
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Box>{children}</Box>
      <Box>
        <Button variant="outlined" color="secondary" onClick={toggleVisibility}>
          Cancel
        </Button>
      </Box>
    </Box>
  )
})

Togglable.displayName = 'Togglable'

export default Togglable
