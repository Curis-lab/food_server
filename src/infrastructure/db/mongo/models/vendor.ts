import mongoose, {Schema, Document } from "mongoose";

export interface VendorDoc extends Document{
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
const VendorSchema =  new Schema({
    name:{type:String, required:true},
    ownerName:{type:String, required:true},
    pinCode:{type:String, required:true},
    address:{type:String},
    phone:{type:String},
    email:{type:String},
    password:{type:String},
    salt:{type:String},
    serviceAvailable:{type:Boolean, required:true},
    coverImage:{type:[String]},
    rating:{type:Number},
    foodType:{type:[String]},
    foods:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'food'
    }]
},{
    timestamps:true,
    toJSON:{
        transform(doc, ret){
            delete ret.password;
            delete ret.__v;
        }
    }
});

const Vendor = mongoose.model<VendorDoc>('vandor',VendorSchema);

export {Vendor}