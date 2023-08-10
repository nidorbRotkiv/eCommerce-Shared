import mongoose, { model, Schema, models } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    images: [{ type: String }],
    category: { type: mongoose.Types.ObjectId, ref: "Category" },
    properties: { type: Object },
    featured: Boolean,
    inStock: Boolean,
    variantKey: String,
    variantValues: [{ type: Object }],
  },
  { timestamps: true }
);

export const Product = models.Product || model("Product", productSchema);
