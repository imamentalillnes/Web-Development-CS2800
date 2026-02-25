import pool from "../db/conections.js";

import todo from "./todo.js";

export async function getAllTodos(){
    // const [rows] = await pool.query("SELECT * FROM todos;")
    // return rows;

    return await todo.findAll({order: [["id", "ASC"]]})

}

let nextId = 3;

const todos = [
    {id:1, task:"Try to have fun with express", done:false},
    {id:2, task:"Buy eggs", done:false}
]

// function getAllTodos(){
//     return todos;
// }

export async function createTodos(task){
    // if(!task || typeof task !="string" || task.trim()===""){
    //     // return res.status(400).json({error:"task is required. You should provide non-empty string"});
    //     throw new error("invalid task");
    // }

    // const todo = {id: nextId++, task:task.trim(), dont: false};
    // todos.push(todo);

    // return todo;

    // const [result] = await pool.query(
    //     "INSERT INTO todos(task) VALUES(?)", [task]
    // );
    // return {id: result.insertId, task, completed:false};

    return await todo.create({task});
}

export async function toggleTodoById(id){
    // const todo = todos.find(t => t.id === id);
    // if(!todo){
    //     return null;
    // }
    // todo.done = !todo.done;
    // return todo;

    const [result] = await pool.query(
        "UPDATE todos SET completed = true, WHERE id = (?)", [id]
    );
    return result;
}

function deleteTodoById(id){
    const todo = todos.find(t => t.id === id);
    if(!todo){
        return null;
    }

    const todoIndex = todos.findIndex(t => t.id === id);

    if(todoIndex === -1){
        return null;
    }

    return todoIndex.splice(todo, 1)[0];
}

export async function getTodoById(id){
    // const todo = todos.find(t => t.id === id);
    // if(!todo){
    //     return null;
    // }

    // const todoIndex = todos.findIndex(t => t.id === id);

    // if(todoIndex === -1){
    //     return null;
    // }

    // return todo;

    return await todo.findByPk({id: id});
}

export default{
    getTodoById,
    deleteTodoById,
}