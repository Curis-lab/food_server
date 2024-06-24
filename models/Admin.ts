

import mongoose, { Schema ,Document} from "mongoose";

export interface AdminDoc extends Document{
    name:string;
    password:string;
    email:string;
    role:string;
    address:string;
    phone:string;
    salt:string;
    status:boolean;
    coverImage:[string];
}

const AdminSchema = new Schema({
    name:{type:String, required:true},
    password:{type:String,required:true},
    email:{type:String,required:true},
    role:{type:String, required:true},
    address:{type:String},
    phone:{type:String},
    salt:{type:String},
    status:{type:Boolean,required:true},
    coverImage:{type:[String]}
},{
    timestamps:true,
    toJSON:{
        transform(doc, ret){
            delete ret.password;
            delete ret.__v;
        }
    }
});

const Admin = mongoose.model<AdminDoc>('admin',AdminSchema);

export {Admin}