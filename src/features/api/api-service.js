import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { appConfig } from '@/data'

const api = createApi({
  reducerPath: 'api',
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
  endpoints: () => ({}),
})

export default api
