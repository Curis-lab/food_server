export interface VendorProps {
  name: string;
  ownerName: string;
  pinCode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  salt: string;
  serviceAvailable: boolean;
  coverImage: [string];
  rating: number;
  foodType: [string];
  foods: any;
}
export class Vendor{
    constructor(props: VendorProps){}
}