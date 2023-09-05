import express from "express"
import {} from "dotenv/config"
import { jsonParser } from "./src/middleware/bodyParser"
import tasksRouter from "./src/routers/tasksRouter"
import usersRouter from "./src/routers/usersRouter"
import { DBConn } from "./src/config/database"

const app = express()
const port = 3001

// Conexion a base de datos Mongo
DBConn()

// Middleware
app.use(jsonParser)

// Routers
app.use(
    tasksRouter,
    usersRouter
    )


app.listen(port, () => {
    console.log(`Aplicacion escuchando por el puerto ${port}`)
})

