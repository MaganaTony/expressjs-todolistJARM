import { Router } from "express";
import { 
    getUserById, 
    getUsers, 
    createUser,
    updateUserById, 
    deleteUserById,
    getUserTasks
} from "../controllers/usersController";
import { authorizationMiddleware } from "../middleware/authorization";

const usersRouter = Router()

usersRouter.route("/users")
    .get(getUsers)
    .post(createUser)    

usersRouter.route("/users/:id")
    .get(authorizationMiddleware, getUserById)
    .put(updateUserById)
    .delete(deleteUserById)

usersRouter.route("/users/:id/tasks").get(getUserTasks)
    export default usersRouter