import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { TVendor } from '../../shared/types/vendor';


export const adminApi = createApi({
    reducerPath:'admin',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/'
    }),
    endpoints:(build)=>({
        getVendors: build.query<TVendor[],void>({
            query:()=>`admin/vendor`
        })
    })
});