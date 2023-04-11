import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  product: {
    title: '',
  },
  currentRating: 1,
};
const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setCurrentRating: (state, action) => {
      const { currentRating } = action.payload;
      state.currentRating = currentRating;
    },
  },
});

export const { setCurrentRating } = productSlice.actions;
export default productSlice;
