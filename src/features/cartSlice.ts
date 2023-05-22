import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { IProduct } from '../types/IProduct'

interface InitialState {
  products: IProduct[]
  freeDeliveryFrom: number
  deliveryFee: number
}

interface ChangePayload {
  product: IProduct
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
        ...action.payload,
        quantity: 1,
      })
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter((product) => {
        return product.name !== action.payload.name
      })
    },
    changeQuantity: (state, action: PayloadAction<ChangePayload>) => {
      const { changeValue, product } = action.payload
      const foundProduct = state.products.find((el) => el.name === product.name)

      if (!foundProduct) {
        return
      }

      if (foundProduct.quantity === 1 && changeValue === -1) {
        state.products = state.products.filter((el) => el.name !== product.name)

        return
      }

      if (foundProduct.quantity === 10 && changeValue === 1) {
        return
      }

      if (foundProduct.quantity) {
        foundProduct.quantity += changeValue
      }
    },
  },
})

export const { addToCart, changeQuantity, removeFromCart } = cartSlice.actions
export const getCartProducts = (state: RootState) => state.cart.products
export const getDeliveryFee = (state: RootState) => state.cart.deliveryFee
export const getFreeDeliveryFrom = (state: RootState) =>
  state.cart.freeDeliveryFrom
export default cartSlice.reducer
