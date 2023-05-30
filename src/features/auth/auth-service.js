import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { appConfig } from '@/data'

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
    }),
    logout: builder.mutation({
      query: () => {
        localStorage.removeItem(appConfig.application.LOGGED_USER_KEY)
        return '/logout'
      },
    }),
  }),
  extraReducers: (builder) => {
    builder.addMatcher(loginApi.endpoints.logout.matchFulfilled, (state) => {
      state.user = null
    })
  },
})

export const { useLoginMutation, useLogoutMutation } = loginApi

export default loginApi
