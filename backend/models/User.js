import mongoose from "mongoose";

const userSchema = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true
  },
};

const User = mongoose.model('user', userSchema);
export default User;
