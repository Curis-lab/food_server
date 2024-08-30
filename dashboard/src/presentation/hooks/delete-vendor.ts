import { useDeleteVendorMutation } from "@/infrastructure/api/apiSlice";

export function UseDeleteVendor() {
    const [deleteVendor] = useDeleteVendorMutation();
  
    const deleteFun = (id: string) => {
      return deleteVendor(id);
    };
  
    return deleteFun;
  }