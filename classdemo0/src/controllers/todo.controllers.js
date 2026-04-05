// import{getTodosService, createTodoService, toggleTodoByIdService, deleteTodoByIdService, getTodoByIdService} from "../services/todo.service.js"

import { response } from "express";
import * as todoService from "../services/todo.service.js";

export async function listTodos(req, res, next){
    try {
        const todos = await todoService.listTodos(1);
        res.json({ count: todos.length, todos });
    } catch (err) {
        next(err);
    }
}

// export function queryTodos(req,res){
//     const id = Number(req.params.id);
//     const todo = getTodoByIdService(id);

//     if (!todo)
//     {
//         return res.status(404).json({error:"todo not found", id});
//     }
//     res.json({todo});
// }

export async function createUserTodo(req, res, next){
    try {
        const todo = await todoService.createUserTodoService(
         // req.user.user_id,
        1,
        req.body.tasks,
    );
    return res.status(201).json({ todo });
    } catch (err) {
        next(err);
    }
}

export async function toggleTodo(req, res, next){
    try {
        // console.log("trying to print req")
        // console.log(req.params)
        const result = await todoService.toggleTodo(
        1,
        Number(req.params.id),
    );
    console.log(result)
    if (!result.ok) {
        return res.status(result.status).json({ error: result.error });
    }

    return res.status(200).json({ todo: result.data });
    } catch (err) {
        next(err);
    }
}

// export function deleteTodo(req, res){
//     const id = Number(req.params.id);
//     const todo = todos.find(t => t.id === id);

//     if (!todo) return res.status(404).json({error:"todo not found", id});
    
//     todos.splice(id - 1, 1);
//     res.json({message:"Deleted task: ", task: todo.task, done: task.done});
// }


export async function removeTodo(req, res, next) {
    try {
        const result = await todoService.removeTodo(
        1,
        Number(req.params.id),
    );
    if (!result.ok) {
        return res.status(result.status).json({ error: result.error });
    }
    return res.status(204).send();
    } catch (err) {
        next(err);
    }
}