import mongoose from "mongoose";

export async function mongooseConnect() {
  mongoose.connection.readyState === 1
    ? mongoose.connection.asPromise()
    : mongoose.connect(process.env.MONGODB_URI);
}
