<<<<<<< HEAD
export interface VendorProps{
    id:string;
    name:string;
    ownerName:string;
    pinCode:string;
    address:string;
    phone:string;
    email:string;
    password:string;
    salt:string;
    serviceAvailable:boolean;
    coverImage:[string];
    rating:number;
    foodType:[string];
    foods:any
}

export class Vendor {
=======
import { Customer } from "../../models";

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
    public static build(props: VendorProps):Vendor{
      const errors: Array<string> = [];
      // if(props.document.length !== 11 && props.document.length !== 14){
      //   errors.push('invalid_document')
      // }

      // if(errors.length > 0){
      //   throw new Error(errors);
      // }
      
      return new Customer(props)
    }
>>>>>>> dev_refactor
}