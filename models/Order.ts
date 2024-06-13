import mongoose, { Schema, Document } from "mongoose";

export interface OrderDoc extends Document {
  orderId: string; //8837739
  items: [any]; //[{food, unit:1}]
  totalAmount: number; //546
  orderDate: Date;
  paidThrough: string; //COD, Credit Card, Wallet
  paymentResponse: string; //{status: true, response: some bank response}
  orderStatus: string;
}

const CustomerSchema = new Schema(
  {
    orderID: { type: String, required: true },
    items: [
      {
        food: { type: Schema.Types.ObjectId, ref: "food", required: true },
        unit: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    orderDate: { type: Date },
    paidThrough: { type: String },
    paymentResponse: { type: String },
    orderStatus: { type: String },
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
  }
);

const Order = mongoose.model<OrderDoc>("order", CustomerSchema);

export { Order };
