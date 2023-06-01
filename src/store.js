import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react'

import { alertReducer } from '@/features/alert'

import { authReducer } from '@/features/auth'
import { api } from '@/features/api'

const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

export default store
