import { createSlice } from '@reduxjs/toolkit'
import { loginApi } from '@/features/auth'
import { appConfig } from '@/data'

const getLoggedUser = () => {
  const loggedUserJSON = window.localStorage.getItem(
    appConfig.application.LOGGED_USER_KEY
  )

  let user
  if (loggedUserJSON) {
    user = JSON.parse(loggedUserJSON)
  } else {
    user = null
  }

  return { user }
}

const authSlice = createSlice({
  name: 'auth',
  initialState: getLoggedUser(),
  reducers: {
    logout: (state) => {
      localStorage.removeItem(appConfig.application.LOGGED_USER_KEY)
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      loginApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        window.localStorage.setItem(
          appConfig.application.LOGGED_USER_KEY,
          JSON.stringify(payload)
        )

        state.user = payload
      }
    )
  },
})

export const selectCurrentUser = (state) => state.auth.user
export const { logout } = authSlice.actions
export default authSlice.reducer
