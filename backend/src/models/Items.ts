import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bought: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export const Item = mongoose.model("Item", itemSchema);