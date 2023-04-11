import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../shared/constants';

import userSlice from '../store /feature/userSlice'; // assuming that userSlice is exported from './userSlice'

// Get the token from the store
// const { user } = userSlice.getState();
// const { token } = user;

// Use the token value as needed
// console.log(token);
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const {
        userSlice: { user },
      } = getState();
      const { token } = user;
      console.log('token hai ye ', token);
      console.log(user, 'ye user hai ');
      if (token) {
        // ${token}
        headers.append('authorization', `Token ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    // signUp: builder.mutation({
    //   query: body => ({
    //     url: 'signup/',
    //     method: 'POST',
    //     body: JSON.stringify(body),
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }),
    // }),
    getAllProducts: builder.query({
      query: () => 'getproduct/',
    }),
    getReview: builder.query({
      query: ({ product_id }) => `productreview/?product_id=${product_id}/`,
    }),
    getProduct: builder.query({
      query: products => `getproduct/${products}`,
    }),
    getCart: builder.query({
      query: () => 'cart/?page=1',
    }),
    getCartItems: builder.query({
      query: () => 'cart/?page=1',
    }),
    getName: builder.mutation({
      query: ({ phone_number }) => ({
        url: 'getname/',
        method: 'POST',
        body: { phone_number },
      }),
    }),

    getRecentlyViewed: builder.query({
      query: page => `recentlyviewed/?page=${page}`,
    }),
    getRecentlyViewedItems: builder.query({
      query: page => `recentyviewed/?page=${page}`,
    }),
    signUp: builder.mutation({
      query: ({ phone_number, name, password, detail }) => ({
        url: 'signup/',
        method: 'POST',
        body: { phone_number, name, password, detail },
      }),
    }),
    signIn: builder.mutation({
      query: ({ phone_number, password }) => ({
        url: 'signin/',
        method: 'POST',
        body: { phone_number, password },
      }),
    }),
    resendOtp: builder.mutation({
      query: ({ phone_number }) => ({
        url: 'resend_otp/',
        method: 'POST',
        body: { phone_number },
      }),
    }),
    verifyOtp: builder.mutation({
      query: ({ phone_number, otp }) => ({
        url: 'verify/',
        method: 'POST',
        body: { phone_number, otp },
      }),
    }),
    addToCart: builder.mutation({
      query: ({ product_id, quantity }) => ({
        url: 'cart/',
        method: 'POST',
        body: { product_id, quantity },
      }),
    }),
    removeFromCart: builder.mutation({
      query: ({ id }) => ({
        url: `cart/${id}/`,
        method: 'DELETE',
      }),
    }),
    forgotPassword: builder.mutation({
      query: ({ reset_password, confirm_password, phone_number }) => ({
        url: 'forgot_password/',
        method: 'POST',
        body: { reset_password, confirm_password, phone_number },
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: 'logout/',
        method: 'POST',
      }),
    }),
    recentlyViewedItems: builder.mutation({
      query: ({ product_id }) => ({
        url: 'recentlyviewed/',
        method: 'POST',
        body: { product_id },
      }),
    }),
    createIntent: builder.mutation({
      query: ({ amount }) => ({
        url: 'intent/',
        method: 'POST',
        body: { amount },
      }),
    }),
    productReview: builder.mutation({
      query: ({ product_id, review, rating }) => ({
        url: 'productreview/',
        method: 'POST',
        body: { product_id, review, rating },
      }),
    }),
    createCheckOut: builder.mutation({
      query: ({ product_id, quantity, address }) => ({
        url: 'create_checkout/',
        method: 'POST',
        body: { product_id, quantity, address },
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useSignUpMutation,
  useSignInMutation,
  useResendOtpMutation,
  useVerifyOtpMutation,
  useGetNameMutation,
  useGetCartItemsQuery,
  useAddToCartMutation,
  useLogOutMutation,
  useForgotPasswordMutation,
  useLazyGetCartQuery,
  useGetRecentlyViewedQuery,
  useRecentlyViewedItemsMutation,
  useRemoveFromCartMutation,
  useCreateCheckOutMutation,
  useCreateIntentMutation,
  useProductReviewMutation,
  useLazyGetRecentlyViewedItemsQuery,
  useGetReviewQuery,
} = api;
