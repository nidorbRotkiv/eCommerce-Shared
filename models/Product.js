import mongoose, { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    images: [{ type: String }],
    category: { type: mongoose.Types.ObjectId, ref: "Category" },
    properties: { type: Object },
    featured: Boolean,
    inStock: String,
    variantKey: { type: String, required: true },
    variantValues: [{ type: Object }],
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);

export default Product;
