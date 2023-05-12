import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { ICartItem } from '../types/ICartItem'
import { IProduct } from '../types/IProduct'

interface InitialState {
  products: ICartItem[]
  freeDeliveryFrom: number
  deliveryFee: number
}

interface changePayload {
  product: ICartItem
  changeValue: -1 | 1
}

const initialState: InitialState = {
  products: [],
  freeDeliveryFrom: 200,
  deliveryFee: 15,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.products.push({
        product: action.payload,
        quantity: 1,
      })
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter((product) => {
        return product.product.name !== action.payload.name
      })
    },
    changeQuantity: (state, action: PayloadAction<changePayload>) => {
      const { changeValue, product } = action.payload
      const foundProduct = state.products.find(
        (el) => el.product.name === product.product.name
      )

      if (!foundProduct) {
        return
      }

      if (foundProduct.quantity === 1 && changeValue === -1) {
        state.products = state.products.filter(
          (el) => el.product.name !== product.product.name
        )

        return
      }

      if (foundProduct.quantity === 10 && changeValue === 1) {
        return
      }

      foundProduct.quantity += changeValue
    },
  },
})

export const { addToCart, changeQuantity, removeFromCart } = cartSlice.actions
export const getCartProducts = (state: RootState) => state.cart.products
export const getDeliveryFee = (state: RootState) => state.cart.deliveryFee
export const getFreeDeliveryFrom = (state: RootState) =>
  state.cart.freeDeliveryFrom
export default cartSlice.reducer
