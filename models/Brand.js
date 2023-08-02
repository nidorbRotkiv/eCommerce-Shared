import { models, model, Schema } from "mongoose";

const BrandSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export const Brand = models.Brand || model("Brand", BrandSchema);