import express, { json } from "express"
import todoListRouter from "./src/routes/todoListRoutes"

const app = express()
const port = 3001

app.use(json())
app.use(todoListRouter)

app.listen(port, () => {
    console.log(`Aplicacion escuchando por el puerto ${port}`)
})

