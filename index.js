import express from "express"
import { jsonParser } from "./src/middleware/bodyParser"
import tasksRouter from "./src/routers/tasksRouter"

const app = express()
const port = 3001

app.use(jsonParser)

app.use(tasksRouter)

app.listen(port, () => {
    console.log(`Aplicacion escuchando por el puerto ${port}`)
})

