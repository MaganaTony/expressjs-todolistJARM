import bcrypt from "bcrypt"
import User from "../models/Users"

export const createSession = async(request, response) => {

    const { email, password } = request.body

    const user = await User.findOne({ email })
    if (!user){
        response.status(404).send({ error: "Usuario no existe"})
    }

    

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch){
        response.status(422).send({ error: "Usuario y/o password invalidas" })
    }

    response.status(200).send(user)

}