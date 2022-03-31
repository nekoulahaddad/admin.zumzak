import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const countrySchema = new Schema({
  value: { type: String, required: true },
  code: { type: String, required: false },
  title: { type: String, required: false },
  translations: { type: Array, required: false },
});

export const Country = mongoose.model("Country", countrySchema);
