import mongoose from "mongoose";

const schema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

export default mongoose.model("users", schema);
