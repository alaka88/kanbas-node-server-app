import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    course: String,
    title: String,
    available: Date,
    until: Date,
    due: Date,
    points: Number,
    questions : Number
},
{ collection: "quizzes" }
);
export default quizSchema;