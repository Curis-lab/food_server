import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainSlice = createApi({
  reducerPath: "foods",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  tagTypes: ['food'],
  endpoints: () => ({}),
});
