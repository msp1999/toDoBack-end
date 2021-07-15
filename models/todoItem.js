import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema
import Todo from "./todo.js";

const todoItemSchema = new mongoose.Schema({
  todoItemName: {
    type: String,
    trim: true,
    required: true
  },
  todoId : {
      type : ObjectId,
      ref : Todo
  },
  completed : {            //completed or incomplete
      type: Boolean,
      required: true,
      default: false
  },
  createdOn: {
    type: Date,
    default : new Date()
  },
  updatedOn: {
    type: Date,
    default : new Date()
  },
  
});


export default mongoose.model("Todoitem", todoItemSchema);