import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../shared/constants';
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
      query: () => 'getproducts',
    }),
    getProduct: builder.query({
      query: products => `products/search?q=${products}`,
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
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useSignUpMutation,
  useSignInMutation,
  useResendOtpMutation,
} = api;
