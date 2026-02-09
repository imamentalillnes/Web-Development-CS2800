import{getTodosService, createTodoService, toggleTodoByIdService, deleteTodoByIdService, getTodoByIdService} from "../services/todo.service.js"

export function listTodos(req, res){
    const todos = getTodosService();
    res.json({count: todos.length, todos});
}

export function queryTodos(req,res){
    const id = Number(req.params.id);
    const todo = getTodoByIdService(id);

    if (!todo)
    {
        return res.status(404).json({error:"todo not found", id});
    }
    res.json({todo});
}

export function createTodo(req, res){

    try{
        const {task} = req.body;
        const todo = createTodoService(task);

        res.status(201).json({message:"Created", todo});
    } catch(err){
        res.status(400).json({error: err.message});
    }
}

export function toggleTodo(req, res){
    const id = Number(req.params.id);
    const todo = toggleTodoByIdService(id);

    if(!todo){
        return res.status(400).json({error: "todo not found"});
    }
    res.json({message:"Toggled", todo});
}

export function deleteTodo(req, res){
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) return res.status(404).json({error:"todo not found", id});
    
    todos.splice(id - 1, 1);
    res.json({message:"Deleted task: ", task: todo.task, done: task.done});
}


export function removeTodo(req, res){
    const id = Number(req.params.id);
    const todo = deleteTodoByIdService(id);

    if(!todo){
        return res.status(400).json({error: "todo not found"})
    }

    res.json({message:"Deleted Sucessfully"});
}