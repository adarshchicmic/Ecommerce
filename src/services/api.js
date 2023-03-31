import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../shared/constants';

import userSlice from './feature/userSlice'; // assuming that userSlice is exported from './userSlice'

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
      console.log('token hai ye ', user);
      if (token) {
        // ${token}
        headers.append('authorization', `${token}`);
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
      query: () => 'getproduct',
    }),
    getProduct: builder.query({
      query: products => `products/search?q=${products}`,
    }),
    getName: builder.mutation({
      query: ({ phone_number }) => ({
        url: 'getname/',
        method: 'POST',
        body: { phone_number },
      }),
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
} = api;
