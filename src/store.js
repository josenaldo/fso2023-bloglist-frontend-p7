import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import { blogApi } from '@/features/blog'

import { alertReducer } from '@/features/alert'
import { loginApi } from '@/features/user'

const store = configureStore({
  reducer: {
    alert: alertReducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      loginApi.middleware,
      blogApi.middleware
    )
  },
})

setupListeners(store.dispatch)

export default store
