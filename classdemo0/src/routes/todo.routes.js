import { Router } from "express";

import {listTodos, queryTodos, createTodos, toggleTodo, deleteTodo } from "../controllers/todo.controllers.js";


const router = Router();

router.get("/", listTodos);
router.get("/:id", queryTodos)
router.post("/", createTodos);
router.patch("/:id/toggle", toggleTodo);
router.delete("/:id", deleteTodo);

export default router;