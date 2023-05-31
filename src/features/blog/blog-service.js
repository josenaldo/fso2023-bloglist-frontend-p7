import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { appConfig } from '@/data'

export const blogApi = createApi({
  reducerPath: 'blogApi',
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
    getBlogs: builder.query({
      query: () => '/blogs',
      providesTags: (result) => {
        const defaultBlogListTag = [{ type: 'Blogs', id: 'LIST' }]

        const extractedBlogTags = result.map(({ id }) => ({
          type: 'Blogs',
          id,
        }))

        extractedBlogTags.push({ type: 'Blogs', id: 'LIST' })

        const blogTags = result ? extractedBlogTags : defaultBlogListTag

        return blogTags
      },
    }),
    getBlog: builder.query({
      query: (id) => `/blogs/${id}`,
      providesTags: (result, error, id) => [{ type: 'Blogs', id }],
    }),
    createBlog: builder.mutation({
      query: (blog) => ({
        url: '/blogs',
        method: 'POST',
        body: blog,
      }),
      invalidatesTags: [{ type: 'Blogs', id: 'LIST' }],
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...blog }) => ({
        url: `/blogs/${id}`,
        method: 'PUT',
        body: blog,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Blogs', id }],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Blogs', id }],
    }),
    likeBlog: builder.mutation({
      query: (id) => ({
        url: `/blogs/${id}/like`,
        method: 'POST',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Blogs', id }],
    }),
  }),
})

export const {
  useGetBlogsQuery,
  useGetBlogQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useLikeBlogMutation,
} = blogApi

export default blogApi
