import { Vendor } from "@entities";


export default interface VendorPersistenceData{
    _id:string,
    name:string
}

export function toDomain(vendor: VendorPersistenceData):any{
    if(!vendor){
        return null;
    }
    return null;
    // return Vendor.build({
    //     name: vendor.name
    // })
}
