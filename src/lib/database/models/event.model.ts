import { Document, Model, Schema, Types, model, models } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category?: Types.ObjectId | string;
  organizer?: Types.ObjectId | string;
}

const EventSchema = new Schema<IEvent>({
  title: { type: "string", required: true },
  description: { type: "string" },
  location: { type: "string" },
  createdAt: { type: "date", default: Date.now },
  imageUrl: { type: "string", required: true },
  startDateTime: { type: "date", default: Date.now },
  endDateTime: { type: "date", default: Date.now },
  price: { type: "string" },
  isFree: { type: "boolean", default: false },
  url: { type: "string" },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event: Model<IEvent> = models.Event || model("Event", EventSchema);

export default Event;
