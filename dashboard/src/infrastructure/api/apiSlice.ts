import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Vendor } from '../../shared/types/vendor';
import { CreateVendor } from '@/presentation/components/create-vendor-account';

interface EditVendor{
    name?: string;
    ownerName?: string;
    pinCode?: string;
    address?: string;
    phone?: string;
    email?: string;
    password?: string;
    serviceAvailable?: boolean;
    coverImage?: string[]; // Array of image URLs
    foodType?: string[]; 
}

export const adminApi = createApi({
    reducerPath:'admin',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/admin/'
    }),
    tagTypes:['admin'],
    endpoints:(build)=>({
        getVendors: build.query<Vendor[],void>({
            query:()=>`vendors`,
            providesTags:['admin']
        }),
        createVendor: build.mutation<Vendor,CreateVendor>({
            query:(body)=>({
                url:`vendor`,
                method:'POST',
                body
            }),
            invalidatesTags:['admin']
        }),
        deleteVendor: build.mutation<void, string>({
            query:(id)=>({
                url:`${id}`,
                method:'DELETE',
                body:id
            }),
            invalidatesTags:['admin']
        }),
        getVendorById: build.query<Vendor, string>({
            query:(id)=>`${id}`,
        }),
        editVendor: build.mutation<Vendor,{id:string, data:EditVendor}>({
            query:(body)=>({
                url:`${body.id}`,
                method:'PATCH',
                body: body.data
            }),
            invalidatesTags:['admin']
        })
    })
});

export const {useDeleteVendorMutation, useGetVendorByIdQuery ,useEditVendorMutation} = adminApi; 