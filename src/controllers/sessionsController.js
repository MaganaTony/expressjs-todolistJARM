import bcrypt from "bcrypt"
import jwt  from "jsonwebtoken"
import User from "../models/Users"

const { JWT_SECRET } = process.env

export const createSession = async(request, response) => {
try{
    const { email, password } = request.body

    const user = await User.findOne({ email })
    if (!user){
        response.status(404).send({ error: "Usuario no existe"})
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch){
        response.status(422).send({ error: "Usuario y/o password invalidas" })
    }

    const encondedToken = await jwt.sign({ userId: user._id, email: user.email}, JWT_SECRET, { expiresIn: '1h'})

    response.status(201).send({ token: encondedToken })
}catch(error){
    console.log(error);
    response.status(500).send({ error: error.message })
}

}