import { Router } from "express"
import { 
    getTodoLists,
    newTodoList,
    getTodoList,
    updateTask,
    deleteTask
} from "../controllers/todoListController"
import { xmlParser } from "../middleware/bodyParser"

const todoListRouter = Router()

todoListRouter.route("/todo-list")
    .get(getTodoLists)
    .post(newTodoList)
    .post(xmlParser)

todoListRouter.route("/todo-list/:taskId")
    .get(getTodoList)
    .put(updateTask)
    .delete(deleteTask)

export default todoListRouter
