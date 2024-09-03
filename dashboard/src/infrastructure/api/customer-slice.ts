import { mainSlice } from "./apiSlice";

export interface Customer {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  verified: boolean;
  otp: number;
  otp_expiry: Date;
  lat: number;
  lng: number;
  orders: [];
}

export const customerSlice = mainSlice.injectEndpoints({
  endpoints: (build) => ({
    getCustomers: build.query<Customer[], void>({
      query: () => "customers",
      providesTags: ["customer"],
    }),
  }),
});

export const { useGetCustomersQuery } = customerSlice;
