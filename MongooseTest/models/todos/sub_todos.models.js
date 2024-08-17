const mongoose = require("mongoose");
const subTodosSchema = new mongoose.Schema(
    {
        _id:{type:String},
        title:{type:String, required:true},
        description:{type:String},
        complete:{
            type:Boolean,
            default:false,
        },
        ceratedby:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        }
    },{timestamps:true})


export const subTodo =mongoose.model("subTodo" ,subTodosSchema);