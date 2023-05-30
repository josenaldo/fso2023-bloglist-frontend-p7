import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { appConfig } from '@/data'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: (args, api, extraOptions) => {
    const user = api.getState().userApi.user
    const token = user?.token

    return fetchBaseQuery({
      baseUrl: `${appConfig.application.BACKEND}/api`,
      prepareHeaders: (headers) => {
        if (token) {
          headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
      },
    })(args, api, extraOptions)
  },
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blogs',
    }),
    getBlog: builder.query({
      query: (id) => `/blogs/${id}`,
    }),
    createBlog: builder.mutation({
      query: (blog) => ({
        url: '/blogs',
        method: 'POST',
        body: blog,
      }),
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/blogs/${id}`,
        method: 'PATCH',
        body: patch,
      }),
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetBlogsQuery,
  useGetBlogQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi

export default blogApi
