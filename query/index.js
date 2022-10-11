import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "query",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    posts: builder.query({
      query: () => {
        return {
          url: "posts",
          method: "GET",
        };
      },
    }),
  }),
});
export const { usePostsQuery } = api;
