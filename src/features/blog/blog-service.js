import { api } from '@/features/api'

const apiWithTag = api.enhanceEndpoints({ addTagTypes: ['Blogs'] })

export const blogApi = apiWithTag.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/blogs/',
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
    commentBlog: builder.mutation({
      query: ({ id, content }) => ({
        url: `/blogs/${id}/comments`,
        method: 'POST',
        body: {
          content,
        },
      }),
      invalidatesTags: (result, error, payload) => [
        { type: 'Blogs', id: payload.id },
      ],
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetBlogsQuery,
  useGetBlogQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
  useLikeBlogMutation,
  useCommentBlogMutation,
} = blogApi

export default blogApi
