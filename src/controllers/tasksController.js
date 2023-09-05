import Task from "../models/Task"

export const createTask = async (request, response) => {
    // obtener la informacion que envia el cliente
    // el cliente nos envia atraves de una peticion post la informacion
    // utilizando el objecto body
  
    try {
        const { name,complete } = request.body
        const newTask = new Task({
            name,
            complete
        })
    
        await newTask.save()
    
        response.status(201).send(newTask)
        
    } catch (error) {
        response.status(422).send({ error: error.message })
    }
}

export const getTasks = async(_, response) => {
    
    const tasks = await Task.find({})
    response.status(200).send(tasks)
}

export const getTaskById = async(request, response) => {
    const { id } = request.params
    const task = await Task.findById(id)
    if (!task) {
        response.status(404).send("no existe el registro en la base de datos")
    }
    response.status(200).send(task)
}

export const updateTaskById = async(request, response) => {
    // obtener datos
    const { id } = request.params
    const {name, complete} = request.body

    // buscar registro
    const task = await Task.findOneAndUpdate(
        {_id: id}, 
        {name, complete}, 
        {returnOriginal: false}
        )
   

    response.status(200).send({message : "Se actualizo el usuario", data: task})
}

export const deleteTaskById = async(request, response) => {
    const { id } = request.params

    try {
        const task = await Task.findByIdAndDelete(id)

        if (!task) {
            response.status(404).send({ message:"Ya no existe el usario en la base de datos"})
        } 
        response.status(200).send({message : "Se elimino el usuario"})
    } catch (error) {
        response.status(422).send({error: error.message})
    }

}