

export function listTodos(req, res){
    res.json({count: listTodos.length, todos});
}

export function queryTodos(req,res){
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) return res.status(404).json({error:"todo not found", id});
    res.json({todo});
}

export function createTodos(req, res){
    const {task} = req.body;

    if(!task || typeof task !="string" || task.trim()===""){
        return res.status(400).json({error:"task is required. You should provide non-empty string"});
    }

    const todo = {id: nextId++, task:task.trim(), dont: false};
    todos.push(todo);

    res.status(201).json({message:"Created", todo});

}

export function toggleTodo(req, res){
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) return res.status(404).json({error:"todo not found", id});

    todo.done = !todo.done;
    res.json({message:"Toggled", todo});


}

export function deleteTodo(req, res){
    const id = Number(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) return res.status(404).json({error:"todo not found", id});
    
    todos.splice(id - 1, 1);
    res.json({message:"Deleted task: ", task: todo.task, done: task.done});
}