import { Vandor } from "../models";

export class ShoppingRepository{
    private database;
    constructor(){
        this.database = Vandor;
    }
    async getByPinCodeChangeServiceAvailable(pinCode:string){
        return await this.database.find({pinCode, serviceAvailable:false}).sort([['rating','descending']]).populate("foods")
    }
}