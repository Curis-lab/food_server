import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainSlice = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/admin/",
  }),
  tagTypes: ["admin","customer"],
  endpoints: () => ({}),
});

