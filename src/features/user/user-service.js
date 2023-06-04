import { api } from '@/features/api'

const apiWithTag = api.enhanceEndpoints({ addTagTypes: ['Users'] })

export const userApi = apiWithTag.injectEndpoints({
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
    getUserProfile: builder.query({
      query: (username) => `/users/profile/${username}`,
      providesTags: (result, error, username) => [{ type: 'Users', username }],
    }),
  }),
  overrideExisting: false,
})

export const { useGetUsersQuery, useGetUserQuery, useGetUserProfileQuery } =
  userApi

export default userApi
