import mongoose, { Schema } from "mongoose";

const userDetailsSchema = new Schema({
  // linking users and their details
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: String,
  },
  phone: { type: String },
  email: { type: String },
  bloodgroup: { type: String },
});

const Details = mongoose.model("userDetail", userDetailsSchema);
export default Details;
