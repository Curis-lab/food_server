import { useGetVendorByIdQuery } from "@/infrastructure/api/apiSlice"

export const SearchVendorById = (id:string) => {
    
    
    const {
      data: vendor,
      isLoading,
    } = useGetVendorByIdQuery(id, {
      pollingInterval: 3000,
      refetchOnMountOrArgChange: true,
      skip: false,
    })
  
    if (isLoading) return 'serching vendor loading....'
    if (!vendor) return 'no vendor'
    return vendor;
  }