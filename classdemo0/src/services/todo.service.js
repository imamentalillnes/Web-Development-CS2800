// SERVICE WILL NEVER HAVE ANYTHING 
// RELATED TO HTTP CALLS OR RESPONSES
import todoModels from "../models/todo.models.js";

function getTodosService(){
    return todoModels.getAllTodos();
}

function createTodoService(task){
    if(!task || typeof task !="string" || task.trim()===""){
    //     // return res.status(400).json({error:"task is required. You should provide non-empty string"});
        throw new error("invalid task");
    }
    return todoModels.createTodos(task);
}

function toggleTodoByIdService(id){
    // const todo = todos.find(t => t.id === id);
    // if(!todo){
    //     return null;
    // }
    return todoModels.toggleTodoById(id);
}


function deleteTodoByIdService(id){
    
    return todoModels.deleteTodoById(id);
}

function getTodoByIdService(id){
    // const todo = todos.find(t => t.id === id);
    // if(!todo){
    //     return null;
    // }
    return todoModels.getTodoById(id);
}

export {
    getTodosService,
    createTodoService,
    toggleTodoByIdService,
    deleteTodoByIdService,
    getTodoByIdService,
};