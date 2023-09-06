import { Router } from "express";
import { register } from "../controllers/registerController";

const registerRouter = Router()

registerRouter.post("/signup", register)

export default registerRouter 