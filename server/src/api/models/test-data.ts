export {};

import mongoose from "mongoose"

const testQuestionsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    chapter: { type: String, required: true },
    questions: { 
        type: Array, 
        default: []
    }
}, { collection: "testquestions" });

export const TestQuestionsModel = mongoose.model("TestQuestions", testQuestionsSchema);