import { mainSlice } from "./main-slice";

const shoppingSlice = mainSlice.injectEndpoints({
    endpoints:(builder)=>({
        search:builder.mutation<void,{question:string, type:string}>({
            query:(body)=>({
                url:`search?type=${body.type}`,
                method:'POST',
                body:body.question
            })
        })
    })
})
export const {useSearchMutation} = shoppingSlice;