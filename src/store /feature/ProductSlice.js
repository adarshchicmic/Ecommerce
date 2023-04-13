import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  product: {
    title: '',
  },
  currentRating: 1,
  totalPrice: 0,
};
const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setCurrentRating: (state, action) => {
      const { currentRating } = action.payload;
      state.currentRating = currentRating;
    },
    changeTotalPrice: (state, action) => {
      const { totalPrice } = action.payload;
      state.totalPrice = totalPrice;
    },
  },
});

export const { setCurrentRating, changeTotalPrice } = productSlice.actions;
export default productSlice;
