import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { appConfig } from '@/data'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: (args, api, extraOptions) => {
    return fetchBaseQuery({
      baseUrl: `${appConfig.application.BACKEND}/api`,
      prepareHeaders: (headers) => {
        const user = api.getState()?.auth?.user
        const token = user?.token

        if (token) {
          headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
      },
    })(args, api, extraOptions)
  },
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users',
      providesTags: (result) => {
        const defaultUserListTag = [{ type: 'Users', id: 'LIST' }]

        const extractedUserTags = result.map(({ id }) => ({
          type: 'Users',
          id,
        }))

        extractedUserTags.push({ type: 'Users', id: 'LIST' })

        const userTags = result ? extractedUserTags : defaultUserListTag

        return userTags
      },
    }),
  }),
})

export const { useGetUsersQuery } = userApi

export default userApi
