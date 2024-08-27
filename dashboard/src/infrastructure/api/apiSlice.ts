import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { Vendor } from '../../shared/types/vendor';
import { CreateVendor } from '@/presentation/components/create-vendor-account';


export const adminApi = createApi({
    reducerPath:'admin',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/admin/'
    }),
    endpoints:(build)=>({
        getVendors: build.query<Vendor[],void>({
            query:()=>`vendor`
        }),
        createVendor: build.mutation<Vendor,CreateVendor>({
            query:(body)=>({
                url:`vendor`,
                method:'POST',
                body
            })
        })
    })
});