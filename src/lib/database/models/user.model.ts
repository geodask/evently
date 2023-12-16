import { Model, Schema, model, models } from "mongoose";

export interface IUser {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
}

const UserSchema = new Schema<IUser>({
  clerkId: { type: "string", required: true, unique: true },
  email: { type: "string", required: true, unique: true },
  username: { type: "string", required: true, unique: true },
  firstName: { type: "string", required: true },
  lastName: { type: "string", required: true },
  photo: { type: "string", required: true },
});

const User: Model<IUser> = models.User || model<IUser>("User", UserSchema);

export default User;
