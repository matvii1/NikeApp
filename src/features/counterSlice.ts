import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

interface InitialState {
  value: number
}

const initialState: InitialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
  },
})

export const { increment } = counterSlice.actions
export const getCounter = (state: RootState) => state.counter.value
export default counterSlice.reducer
