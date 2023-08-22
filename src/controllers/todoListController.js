const todoLists = [
    { id: 1, task: "inicializar proyecto nodejs con npm init", complete: false, likes: 0 },
    { id: 2, task: "instalar expressjs en mi proyecto", complete: false }
]

export const getTodoLists = (_, response) => {
    response.send(todoLists)
}

export const newTodoList = (request, response) => {
    const newTask = {
        id: todoLists.length + 1,
        task: request.body.task,
        complete: false
    }
    
    todoLists.push(newTask)
    response.status(201).send(newTask)
}

export const getTodoList = (request, response) => {
    const { taskId } = request.params
    const task = todoLists.find((task) => task.id == taskId )
    
    response.status(200).send(task)
}

export const updateTask = (request, response) => {
    // obtener datos
    const { taskId } = request.params
    const { task, complete } = request.body

    // buscar registro
    let getTask = todoLists.find((task) => task.id == taskId )

    // actualizo registro
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
