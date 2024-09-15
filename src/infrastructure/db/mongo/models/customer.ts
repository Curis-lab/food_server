import mongoose, { Schema, Document } from 'mongoose';
import { OrderDoc } from './order';

interface CustomerDoc extends Document {
  email: string;
  password: string;
  salt: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  verified: boolean;
  otp: number;
  otp_expiry: Date;
  lat: number;
  lng: number;
  orders: [OrderDoc];
}

const CustomerSchema = new Schema(
  {
    email: { type: String, required: true, minLength: 6 },
    password: { type: String, required: true, minLength: 6 },
    salt: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    phone: { type: String },
    verified: { type: Boolean },
    otp: { type: Number },
    otp_expiry: { type: Date, immutable: true, default: () => Date.now() },
    lat: { type: Number },
    lng: { type: Number },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: 'order',
      },
    ],
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
    updatedAt: { type: Date, default: () => Date.now() },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.salt;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
    timestamps: true,
  },
);

const Customer = mongoose.model<CustomerDoc>('customer', CustomerSchema);

export { Customer };
