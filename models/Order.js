import { model, models, Schema } from "mongoose";

const OrderSchema = new Schema(
  {
    line_items: Object,
    name: String,
    city: String,
    postalCode: String,
    streetAddress: String,
    country: String,
    email: String,
    phoneNumber: String,
    idNumber: String,
    delivered: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Order = models.Order || model("Order", OrderSchema);
