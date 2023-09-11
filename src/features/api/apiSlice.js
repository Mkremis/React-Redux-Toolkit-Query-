import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://vitejsvitek7g8ke-ukrq--3500--7259293c.local-credentialless.webcontainer.io',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
  }),
});

export const { useGetTodosQuery } = apiSlice;
