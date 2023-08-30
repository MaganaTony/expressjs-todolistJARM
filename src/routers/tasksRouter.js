import { Router } from "express"
import {} from "../controllers/tasksController"

const tasksRouter = Router()

tasksRouter.route("/todo-list")
    // .get(getTodoLists)
    // .post(newTodoList)
    // .post(xmlParser)

    tasksRouter.route("/todo-list/:taskId")
    // .get(getTodoList)
    // .put(updateTask)
    // .delete(deleteTask)

export default tasksRouter
