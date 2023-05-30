import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { ALERT_TYPES } from '@/features/alert'
import { handleError } from './alert-utils'

const NO_ALERT_STATE = {
  type: null,
  message: null,
  details: null,
  error: null,
  timeoutId: null,
}

const ALERT_TIMEOUT = 5

const ERROR_ALERT_TIMEOUT = 15

const setAlert = createAsyncThunk(
  'alert/setAlert',
  async (
    {
      type = ALERT_TYPES.INFO,
      message,
      details = null,
      error = null,
      timeoutInSeconds = ALERT_TIMEOUT,
    },
    thunkAPI
  ) => {
    const { dispatch, getState } = thunkAPI
    const { alert } = getState()

    if (alert.timeoutId) {
      clearTimeout(alert.timeoutId)
    }

    const timeoutId = setTimeout(() => {
      dispatch({ type: 'alert/removeAlert' })
    }, timeoutInSeconds * 1000)

    return {
      message: message,
      type: type,
      details: details,
      error: error,
      timeoutId: timeoutId,
    }
  }
)

const setErrorAlert = createAsyncThunk(
  'alert/setErrorAlert',
  async (
    { message, details = null, error, timeoutInSeconds = ERROR_ALERT_TIMEOUT },
    thunkAPI
  ) => {
    const { dispatch, getState } = thunkAPI
    const { alert } = getState()

    if (alert.timeoutId) {
      clearTimeout(alert.timeoutId)
    }

    const timeoutId = setTimeout(() => {
      dispatch({ type: 'alert/removeAlert' })
    }, timeoutInSeconds * 1000)

    const newAlert = handleError(error, message, details)
    newAlert.timeoutId = timeoutId

    return newAlert
  }
)

const alertSlice = createSlice({
  name: 'alert',
  initialState: NO_ALERT_STATE,
  reducers: {
    /**
     * Action creator for removing the current alert.
     *
     * @function removeAlert
     * @param {AlertState} state - The current alert state.
     * @returns {Object} The action object to dispatch.
     */
    removeAlert: (state) => {
      clearTimeout(state.timeoutId)
      return NO_ALERT_STATE
    },
  },
  extraReducers: {
    [setAlert.fulfilled]: (state, action) => {
      return action.payload
    },
    [setErrorAlert.fulfilled]: (state, action) => {
      return action.payload
    },
  },
})

export { setAlert, setErrorAlert }
export const { removeAlert } = alertSlice.actions
export default alertSlice.reducer
