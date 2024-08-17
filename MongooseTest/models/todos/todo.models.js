const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema(
    {
        title: { type: "string" },
        description: { type: "string" },
        complete: {
            type: "boolean",
            default: false,
        },
        createdby: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "subTodo"
            }
        ]

    }, { timestamps: true }
)
export const Todo = mongoose.model("Todo", todoSchema)