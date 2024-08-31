import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface foodProps{
  category:string; 
description:string;
foodType:string;
images:string[]
name:string;
price:number;
readyTime:number;
_id:string;
}

export const mainSlice = createApi({
  reducerPath: "foods",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getFoods: builder.query<{'data':foodProps[]}, void>({
      query: () => `vendor/foods`,
    }),
  }),
});

export const { useGetFoodsQuery } = mainSlice;
