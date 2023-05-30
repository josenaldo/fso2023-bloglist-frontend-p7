import { createSlice } from '@reduxjs/toolkit'
import { loginApi } from '@/features/auth'
import { appConfig } from '@/data'

const slice = createSlice({
  name: 'auth',
  initialState: { token: null, username: null, name: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      loginApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        window.localStorage.setItem(
          appConfig.LOGGED_USER_KEY,
          JSON.stringify(payload)
        )

        console.log(
          '🔴 loginApi.endpoints.login.matchFulfilled payload',
          payload
        )
        state.user = payload
      }
    )
  },
})

export default slice.reducer

export const selectCurrentUser = (state) => state.auth.user
