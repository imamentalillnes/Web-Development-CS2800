import { Router } from "express";

import {listTodos, queryTodos, createTodo, toggleTodo, deleteTodo, removeTodo } from "../controllers/todo.controllers.js";


const router = Router();

router.get("/", listTodos);
router.get("/:id", queryTodos)
router.post("/", createTodo);
router.patch("/:id/toggle", toggleTodo);
router.delete("/:id", deleteTodo);
router.delete("/delete/:id", removeTodo)

export default router;