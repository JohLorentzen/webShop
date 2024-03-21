import { configureStore } from '@reduxjs/toolkit'
import imageReducer from '../features/imagesSlice.ts';

export const store = configureStore({
  reducer: {
    image : imageReducer,
  },
})
