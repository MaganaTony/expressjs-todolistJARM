import { Router } from "express"
import { 
    getTodoLists,
    newTodoList,
    getTodoList,
    updateTask
} from "../controllers/todoListController"

const todoListRouter = Router()

todoListRouter.route("/todo-list")
    .get(getTodoLists)
    .post(newTodoList)

todoListRouter.route("/todo-list/:taskId")
    .get(getTodoList)
    .put(updateTask)

export default todoListRouter
