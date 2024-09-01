import { mainSlice } from "./main-slice";
interface foodProps {
  category: string;
  description: string;
  foodType: string;
  images: string[];
  name: string;
  price: number;
  readyTime: number;
  _id: string;
}
export interface foodInput {
  name: string;
  description: string;
  category: string;
  foodType: string;
  readyTime: number;
  price: number;
}

const vendorSlice = mainSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFoods: builder.query<{ data: foodProps[] }, void>({
      query: () => `vendor/foods`,
      providesTags:["food"]
    }),
    addFood: builder.mutation<foodProps, foodInput>({
      query: (body) => ({
        url: `vendor/food`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["food"],
    }),
    deleteFood: builder.mutation<boolean, string>({
      query: (id) => ({
        url: `vendor/${id}/food`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["food"],
    }),
  }),
});

export const { useAddFoodMutation, useGetFoodsQuery, useDeleteFoodMutation } =
  vendorSlice;
