import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://c196-122-160-165-213.in.ngrok.io/',
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
      query: () => 'products',
    }),
    getProduct: builder.query({
      query: products => `products/search?q=${products}`,
    }),
    signUp: builder.mutation({
      query: ({ phone_number, name, password }) => ({
        url: 'signup/',
        method: 'POST',
        body: { phone_number, name, password },
      }),
    }),
    signIn: builder.mutation({
      query: ({ phone_number, password }) => ({
        url: 'signin/',
        method: 'POST',
        body: { phone_number, password },
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductQuery,
  useSignUpMutation,
  useSignInMutation,
} = api;
