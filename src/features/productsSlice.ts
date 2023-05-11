import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'app/store'
import { IProduct } from 'types/IProduct'
import products from '../data/products.json'

interface InitialState {
  products: IProduct[]
  selectedProduct: IProduct | null
}

const initialState: InitialState = {
  products: products,
  selectedProduct: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<IProduct>) => {
      state.selectedProduct = action.payload
    },
  },
})

export const getProducts = (state: RootState) => state.products.products
export const getSelectedProduct = (state: RootState) =>
  state.products.selectedProduct
export const { setSelectedProduct } = productsSlice.actions
export default productsSlice.reducer
