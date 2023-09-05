import User from "../models/Users"

export const createUser = async (request, response) => {
    // obtener la informacion que envia el cliente
    // el cliente nos envia atraves de una peticion post la informacion
    // utilizando el objecto body
  
    try {
        const { email, name, lastName, complete } = request.body
        const newUser = new User({
            email,
            name,
            lastName,
            complete
        })
    
        await newUser.save()
    
        response.status(201).send(newUser)
        
    } catch (error) {
        response.status(422).send({ error: error.message })
    }

}

export const getUsers = async(_, response) => {
    
    const users = await User.find({})
    response.status(200).send(users)
}

export const getUserById = async(request, response) => {
    const { id } = request.params
    const user = await User.findById(id)
    if (!user) {
        response.status(404).send("no existe el registro en la base de datos")
    }
    response.status(200).send(user)
}


export const updateUserById = async(request, response) => {
    // obtener datos
    const { id } = request.params
    const {email, name, lastName} = request.body

    // buscar registro
    const user = await User.findOneAndUpdate(
        {_id: id}, 
        {email, name, lastName}, 
        {returnOriginal: false}
        )
   

    response.status(200).send({message : "Se actualizo el usuario", data: user})
}

export const deleteUserById = async(request, response) => {
    const { id } = request.params

    try {
        const user = await User.findOneAndDelete(id)

        if (!user) {
            response.status(404).send({ message:"Ya no existe el usario en la base de datos"})
        } 
        response.status(200).send({message : "Se elimino el usuario"})
    } catch (error) {
        response.status(422).send({error: error.message})
    }

}