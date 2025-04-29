import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface LoginResponse {
  status: boolean;
  message: string;
  data: {
    token: string;
  };
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.1.184/development/',
    prepareHeaders: (headers, { getState }) => {
      return headers;
    },
  }),

  endpoints: builder => ({
    login: builder.mutation<LoginResponse, FormData>({
      query: (form) => {
        console.log('MAKING API CALL WITH------>>',form)
        return {
          url: '/api/um/login',
          method: 'POST',
          body: form,
        };
      },
    }),
  }),
});

export const {useLoginMutation } = apiSlice;