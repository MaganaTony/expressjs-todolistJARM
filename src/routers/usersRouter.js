import { Router } from "express";
import { 
    getUserById, 
    getUsers, 
    createUser,
    updateUserById, 
    deleteUserById
} from "../controllers/usersController";

const usersRouter = Router()

usersRouter.route("/users")
    .get(getUsers)
    .post(createUser)    

usersRouter.route("/users/:id")
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById)

    export default usersRouter