import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hacker-news.firebaseio.com/v0/',
  }),
  endpoints: (builder) => ({
    getNewStories: builder.query({
      query: () => 'newstories.json',
    }),
    getItemsById: builder.query({
      query: (id) => `item/${id}.json`,
    }),
  }),
});

export const { useGetNewStoriesQuery, useGetItemsByIdQuery } = newsApi;
