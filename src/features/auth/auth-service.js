import { api } from '@/features/api'

export const loginApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login/',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useLoginMutation } = loginApi

export default loginApi
