import { Document, Schema, Types, model, models } from "mongoose";

export interface IOrder extends Document {
  createdAt: Date;
  stripeId: string;
  totalAmount: string;
  event: Types.ObjectId;
  buyer: Types.ObjectId;
}

export type IOrderItem = {
  totalAmount: string;
  createdAt: Date;
  eventTitle: string;
  eventId: string;
  buyer: string;
};

const OrderSchema = new Schema<IOrder>({
  createdAt: { type: "date", default: Date.now },
  stripeId: { type: "string", required: true, unique: true },
  totalAmount: { type: "string" },
  event: { type: Schema.Types.ObjectId, ref: "Event" },
  buyer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
