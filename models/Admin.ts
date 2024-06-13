// {
//     "_id": ObjectId("60c72b2f9b1e8a3d5f6789ab"),
//     "username": "admin123",
//     "password": "$2a$10$EIXZaYVK1fsbw1ZfbX3OXePaWxn96p36mIJN/N5Q5sqiA0/INN1Se", // Example of bcrypt hashed password
//     "email": "admin@example.com",
//     "fullName": "John Doe",
//     "role": "Super Admin",
//     "status": "Active",
//     "createdAt": ISODate("2023-06-13T00:00:00Z"),
//     "updatedAt": ISODate("2023-06-13T00:00:00Z"),
//     "lastLogin": ISODate("2023-06-12T12:00:00Z"),
//     "phoneNumber": "+1234567890",
//     "address": "123 Admin St, Admin City, AC 12345",
//     "profilePicture": "http://example.com/profiles/admin123.jpg",
//     "twoFactorEnabled": true,
//     "permissions": {
//       "canCreateVendor": true,
//       "canDeleteVendor": false,
//       "canUpdateVendor": true,
//       "canViewReports": true
//     }
//   }

import mongoose, { Schema ,Document} from "mongoose";

interface AdminDoc extends Document{
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