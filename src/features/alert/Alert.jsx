import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Alert as MuiAlert, AlertTitle, Container } from '@mui/material'

import { removeAlert } from '@/features/alert'

const Alert = () => {
  const dispatch = useDispatch()
  const alert = useSelector((state) => state.alert)

  const close = () => {
    dispatch(removeAlert())
  }

  if (!alert || !alert.message) {
    return null
  }

  return (
    <Container sx={{ my: 3 }} maxWidth="md">
      <MuiAlert severity={alert.type} onClose={close} variant="outlined">
        <AlertTitle>{alert.message}</AlertTitle>

        {alert.details && <p>{alert.details}</p>}
        {alert.error && (
          <ul>
            {alert.error.statusCode && (
              <li>Status code: {alert.error.statusCode}</li>
            )}
            {alert.error.errorMessage && (
              <li>Message Error: {alert.error.errorMessage}</li>
            )}
            {alert.error.errorDetails && (
              <li>Details: {alert.error.errorDetails}</li>
            )}
          </ul>
        )}
      </MuiAlert>
    </Container>
  )
}

export default Alert
