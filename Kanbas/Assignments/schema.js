import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
        title: String,
        course: String,
        description: String,
        points: Number,
        due: Date,
        available: Date,
        until: Date,
    },
    {collection: "assignments"}
);

export default assignmentSchema;