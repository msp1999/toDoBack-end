import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema

const todoSchema = new mongoose.Schema({
  todoName: {
    type: String,
    trim: true,
    required: true
  },
  todoDescription : {
    type: String,
    trim: true,
    required: true
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

export default mongoose.model("Todo", todoSchema);