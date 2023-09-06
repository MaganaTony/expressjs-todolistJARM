import express from "express"
import {} from "dotenv/config"
import { jsonParser } from "./src/middleware/bodyParser"
import tasksRouter from "./src/routers/tasksRouter"
import usersRouter from "./src/routers/usersRouter"
import { DBConn } from "./src/config/database"
import registerRouter from "./src/routers/registerRouter"
import sessionsRouter from "./src/routers/sessionsRouter"

const app = express()
const port = 3001

// Conexion a base de datos Mongo
DBConn()

// Middleware
app.use(jsonParser)

// Routers
app.use(
    tasksRouter,
    usersRouter,
    registerRouter,
    sessionsRouter
    )

//Inicia la api en el puerto designado
app.listen(port, () => {
    console.log(`Aplicacion escuchando por el puerto ${port}`)
})

