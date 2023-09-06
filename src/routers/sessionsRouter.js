import { Router } from "express";
import { createSession } from "../controllers/sessionsController";

//controller

//Instanciar router de sesion
const sessionsRouter = Router()

sessionsRouter.route("/sessions")
    .post(createSession)
    .delete()

    export default sessionsRouter