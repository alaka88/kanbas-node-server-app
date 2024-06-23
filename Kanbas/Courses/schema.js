import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: String,
    number: String,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: "UserModel"},
},
{ collection: "courses" }
);
export default courseSchema;