import { configureStore } from '@reduxjs/toolkit';
import listReducer from './slicers/listSlice'

export const store = configureStore({
  reducer: {
    list: listReducer
  },
})