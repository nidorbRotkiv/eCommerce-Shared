import mongoose, { model, Schema, models } from "mongoose";

const productSchema = new Schema(
  {
    x: { type: Number, required: true },
  },
  { timestamps: false }
);

const Product = model("Product", productSchema);

export default Product;