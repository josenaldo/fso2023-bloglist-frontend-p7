import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { appConfig } from '@/data'
// import { createAsyncThunk } from '@reduxjs/toolkit'

// export const logout = createAsyncThunk('user/logout', async () => {
//   localStorage.removeItem(appConfig.application.LOGGED_USER_KEY)
// })

export const loginApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${appConfig.application.BACKEND}/api`,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(credentials, { dispatch, queryFulfilled }) {
        try {
          console.log('🔴 onQueryStarted credentials', credentials)
          const { data } = await queryFulfilled

          console.log('🔴 onQueryStarted data', data)
          dispatch({ type: 'user/loginSuccess', payload: data })
        } catch (err) {
          // handle error
        }
      },
    }),
    logout: builder.mutation({
      query: () => {
        localStorage.removeItem(appConfig.application.LOGGED_USER_KEY)
        return '/logout' // I'm assuming you have a logout endpoint
      },
    }),
  }),
  extraReducers: (builder) => {
    builder.addMatcher(loginApi.endpoints.logout.matchFulfilled, (state) => {
      state.user = null
    })

    builder.addCase('user/loginSuccess', (state, action) => {
      console.log('🔴 user/loginSuccess state', state)
      console.log('🔴 user/loginSuccess action', action)
      state.user = action.payload
    })
  },
})

export const { useLoginMutation, useLogoutMutation } = loginApi

export default loginApi
