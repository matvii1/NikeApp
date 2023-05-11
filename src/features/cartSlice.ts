import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { IProduct } from 'types/IProduct'

interface InitialState {
  products: IProduct[]
}

const initialState: InitialState = {
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload)
    },
  },
})

export const { addToCart } = cartSlice.actions
export const getCartProducts = (state: RootState) => state.cart.products
export default cartSlice.reducer
