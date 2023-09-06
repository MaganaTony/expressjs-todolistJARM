import { Router } from "express"
import { 
    createTask,
    getTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById
} from "../controllers/tasksController"

const tasksRouter = Router()

tasksRouter.route("/tasks")
     .get(getTasks)
     .post(createTask)
     
tasksRouter.route("/tasks/:id")
     .get(getTaskById)
     .put(updateTaskById)
     .delete(deleteTaskById)

export default tasksRouter
