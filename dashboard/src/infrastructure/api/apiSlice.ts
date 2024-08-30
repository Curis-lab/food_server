import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Vendor } from '../../shared/types/vendor';
import { CreateVendor } from '@/presentation/components/create-vendor-account';


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
        })
    })
});

export const {useDeleteVendorMutation, useGetVendorByIdQuery} = adminApi; 