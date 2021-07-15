import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = process.env.port || 4000;
const connectionUrl = process.env.MONGO_URI


mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  console.log("DB Connected")
}).catch((err) => {
  console.log(err);
});


import todoRoutes from './routes/todo.js';

app.use(express.json());
app.use(cors());
app.use("/", todoRoutes);

app.listen(port);
