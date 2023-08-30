let todoLists = [
    { id: 1, task: "inicializar proyecto nodejs con npm init", complete: false, likes: 0 },
    { id: 2, task: "instalar expressjs en mi proyecto", complete: false }
]

export const getTodoLists = (_, response) => {
    response.send(todoLists)
}

export const newTodoList = (request, response) => {
    // obtener la informacion que envia el cliente
    // el cliente nos envia atraves de una peticion post la informacion
    // utilizando el objecto body
    console.log(request.body)
    // const newTask = {
    //     id: todoLists.length + 1,
    //     task: request.body.task,
    //     complete: false
    // }
    // simulando que guardo en una base de datos
    // todoLists.push(newTask)
    // es la respuesta al cliente que envio la peticion
    response.status(201).send({})
}

export const getTodoList = (request, response) => {
    const { taskId } = request.params
    const task = todoLists.find((task) => task.id == taskId )
    if (!task) {
        response.status(404).send("no existe el registro en la base de datos")
    }
    response.status(200).send(task)
}

export const updateTask = (request, response) => {
    // obtener datos
    const { taskId } = request.params
    const { task, complete } = request.body

    // buscar registro
    let getTask = todoLists.find((task) => task.id == taskId )

    // actualizo registro, spread operator
    let updateTask = {
        ...getTask,
        task,
        complete
    }

    // guardo en base de datos
    getTask.complete = complete
    getTask.task = task

    // respondo al cliente
    response.send({ message: "Se actualizo la tarea", data: updateTask })
}

export const deleteTask = (request, response) => {
    const { taskId } = request.params
    const task = todoLists.find((task) => task.id == taskId )

    if (!task) {
        response.status(404).send("no existe el registro en la base de datos")
    }

    // simulando eliminacion de base de datos
    todoLists = todoLists.filter((tlTask) => tlTask.id != task.id)
    response.status(200).send(todoLists)
}
