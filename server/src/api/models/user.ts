export {};

import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { 
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    chapter_info: { 
        type: Object, 
        default: {
            current_chapter: 1,
            current_part: 1
        } 
    }
});

export const UserModel = mongoose.model("User", userSchema);