import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import { alertReducer } from '@/features/alert'
import { blogApi } from '@/features/blog'
import { loginApi, authReducer } from '@/features/auth'
import { userApi } from '@/features/user'

const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      loginApi.middleware,
      blogApi.middleware,
      userApi.middleware
    )
  },
})

setupListeners(store.dispatch)

export default store
