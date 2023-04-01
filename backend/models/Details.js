import mongoose, { Schema } from "mongoose";

const userDetailsSchema = new Schema ({
    name: {
        type: String
    },
    phone: { type: String},
    email: {type: String},
    bloodgroup: {type: String},
})

const Details = mongoose.model('userDetail', userDetailsSchema);
export default Details;