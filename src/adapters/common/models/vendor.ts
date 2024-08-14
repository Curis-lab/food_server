//change dirty data to clean data
export class Vendor{
    constructor(
        public name:string,
        public ownerName:string,
        public pinCode:string,
        public address:string,
        public phone:string,
        public email:string,
        public password:string,
        public salt:string,
        public serviceAvailable:boolean,
        public coverImage:[string],
        public rating:number,
        public foodType:[string],
        public foods:any
    ){}
}