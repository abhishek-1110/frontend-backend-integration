import mongoose, { Schema } from "mongoose";

const userDetailsSchema = new Schema ({
    name: String,
    phone: String,
    email: String,
    bloodgroup: String,
})

const details = mongoose.model('userDetail', userDetailsSchema);
export default details;