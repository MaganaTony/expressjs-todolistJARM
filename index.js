import express, { json } from "express"
import { loggerMiddleware } from "./src/middleware/logger"
import { jsonParser, xmlParser } from "./src/middleware/bodyParser"
import todoListRouter from "./src/routes/todoListRoutes"

const app = express()
const port = 3001

app.use(
    jsonParser,
    xmlParser,
    loggerMiddleware
)

app.use(todoListRouter)

app.listen(port, () => {
    console.log(`Aplicacion escuchando por el puerto ${port}`)
})

