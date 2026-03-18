import { User, Todo } from "../models"
import * as adminTodoService from "../services/admin.service.js"

export async function getAllTodosService(){
    return await Todo.findAll({order: [["task_id", "ASC"]]})
}