import Todo from "../models/todo.js";
import TodoItem from "../models/todoItem.js";

export const createTodo= async (req, res) => {   
    const todo = new Todo({
        createdOn: new Date(),
        ...req.body
    });
    await todo.save();
    res.send({status : 1, message: "Todo Created", data : todo})
}

export const createTodoItem= async (req, res) => {   
    const todoItem = new TodoItem({
        createdOn: new Date(),
        ...req.body
    });
    await todoItem.save();
    res.send({status : 1, message: "Todo Item Created", data : todoItem})

}

export const deleteTodo= async (req, res) => {   
    const {todoId} = req.body;
    await TodoItem.deleteMany({todoId});
    await Todo.deleteOne({_id : todoId});
    res.send({status : 1, message: "Todo Deleted", data : {}})

}

export const deleteTodoItem= async (req, res) => {
    const {todoItemId} = req.body;   
    await TodoItem.deleteOne({_id: todoItemId});
    res.send({status : 1, message: "Todo Item Deleted", data : {}})

}
export const getAllTodos= async (req, res) => {   
    const todos = await Todo.find({}).exec();
    res.send({status : 1, data : todos})

}
export const getAllTodoItems= async (req, res) => {   
    const todoItems = await TodoItem.find({todoId : req.query.todoId}).exec();
    res.send({status : 1, data : todoItems});

}
export const updateTodo= async (req, res) => { 
    const {todoId, todoName} = req.body  
    const todoItems = await Todo.updateOne({_id : todoId}, { $set: {todoName}});
    res.send({status : 1, data : todoItems});

}
export const updateTodoItem = async (req, res) => {   
    const {todoItemId, completed, todoItemName} = req.body;
    let obj = {};
    if(completed != undefined || completed != null) {
        obj['completed'] = completed;
    }
    if(todoItemName) {
        obj['todoItemName'] = todoItemName;
    }
    await TodoItem.updateOne({_id : todoItemId}, {$set : obj}).exec();
    res.send({status : 1, message : "Updated Successfully", data : []});

}