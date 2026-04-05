import pool from "../db/conections.js";

import Todo from "./todo.js";

// export async function getAllUserTodos(userId){
//     // const [rows] = await pool.query("SELECT * FROM todos;")
//     // return rows;

//     return await todo.findAll({ where : {userId}}, {order: [["id", "ASC"]]})

// }

let nextId = 3;

const todos = [
    {id:1, task:"Try to have fun with express", done:false},
    {id:2, task:"Buy eggs", done:false}
]

// function getAllTodos(){
//     return todos;
// }

export async function createUserTodo(userId, task){
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

    return await Todo.create({user_Id: userId, tasks: task});
}

export async function toggleTodoById(id){
    const todo = todos.find(t => t.id === id);
    if(!todo){
        return null;
    }
    todo.done= !todo.done;
    return todo;
}

function deleteTodoById(id){
    const todoIndex = todos.findIndex(t => t.id === id);

    if(todoIndex === -1){
        return null;
    }

    return todos.splice(id, 1)[0];
}

// export async function getTodoById(id){
//     // const todo = todos.find(t => t.id === id);
//     // if(!todo){
//     //     return null;
//     // }

//     // const todoIndex = todos.findIndex(t => t.id === id);

//     // if(todoIndex === -1){
//     //     return null;
//     // }

//     // return todo;

//     return await todo.findByPk({id: id});
// }

export default{
    toggleTodoById,
    deleteTodoById,
}