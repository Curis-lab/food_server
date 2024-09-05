import { mainSlice } from "./main-slice";

const customerSlice = mainSlice.injectEndpoints({
    endpoints:(builder)=>({
        deleteAccount:builder.mutation<void, string>({
            query:(id)=>({
                url:`customer/${id}/customer`,
                method:'POST',
                body:id
            })
        })
    })
});

export const {useDeleteAccountMutation} = customerSlice;