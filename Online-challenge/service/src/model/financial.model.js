import mongoose from "mongoose";

const schema = mongoose.Schema({
  userId: mongoose.ObjectId,
  income: Number,
  expenses: Number,
  savings: Number,
});

export default mongoose.model("financial_details", schema);
