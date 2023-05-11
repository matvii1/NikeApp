import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counterSlice'
import productsSlice from '../features/productsSlice'
import cartSlice from '../features/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    products: productsSlice,
    cart: cartSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
