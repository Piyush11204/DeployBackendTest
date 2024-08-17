const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        username: {
            type: "string", required: true, unique: true, lowercase: true

        },

        email: { type: "string", required: true, unique: true, lowercase: true },
        
        password: { type: "<PASSWORD>" }

    }
    , { timesteams: true });


export const User = mongoose.model("User", userSchema)

