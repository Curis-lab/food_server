import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { httpResponse } from '../../shared/types/common/http-response';
import { Vendor } from '../../shared/types/vendor';


export const adminApi = createApi({
    reducerPath:'admin',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/'
    }),
    endpoints:(build)=>({
        getVendors: build.query<httpResponse<Vendor[]>,void>({
            query:()=>`admin/vendor`
        })
    })
});