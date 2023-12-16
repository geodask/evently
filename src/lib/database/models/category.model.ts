import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  name: string;
}

const CategorySchema = new Schema<ICategory>({
  name: { type: "string", required: true, unique: true },
});

const Category = models.Category || model<ICategory>("Category", CategorySchema);

export default Category;
