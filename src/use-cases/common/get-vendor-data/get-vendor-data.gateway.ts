// export default interface GetVandorDataGateway {
//   vandorById(vandorId: string): Promise<VandorDoc | null>;
//   allVandors(): Promise<VandorDoc[]>;
//   deleteVandor(id:string): Promise<boolean>;
//   createVandor(input: IVendorInput): Promise<VandorDoc>;
//   updateVandor(id:string, input:string):Promise<VandorDoc>;
// }

import { VendorProps } from "../../../entities/vendor";

export default interface getVendorDataGateway{
    findVendorById(id:string):Promise<VendorProps>;
}