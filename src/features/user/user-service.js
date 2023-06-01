import { api } from '@/features/api'

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users/',
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
    getUser: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'Users', id }],
    }),
  }),
  overrideExisting: false,
})

export const { useGetUsersQuery, useGetUserQuery } = userApi

export default userApi
