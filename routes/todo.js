import express from 'express';
import { createTodo, createTodoItem, deleteTodo, deleteTodoItem, getAllTodoItems, getAllTodos, updateTodo, updateTodoItem } from '../controllers/todo.js';

const router = express.Router();


router.post("/createTodo", createTodo);
router.post("/createTodoItem",createTodoItem)
router.post("/deleteTodo",deleteTodo)
router.post("/deleteTodoItem",deleteTodoItem)
router.post("/updateTodo",updateTodo)
router.post("/updateTodoItem",updateTodoItem)
router.get("/getAllTodos", getAllTodos)
router.get("/getAllTodoItems", getAllTodoItems)


export default router;