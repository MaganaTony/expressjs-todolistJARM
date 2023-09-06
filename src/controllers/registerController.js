
import bcrypt from "bcrypt"
import User from "../models/Users";
export const register = async(request, response) => {

    const { email, name, lastName, password } = request.body

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword);

    const registerUser = new User ({
        email,
        name,
        lastName,
        password: hashedPassword
    })

    await registerUser.save()

    console.log(registerUser);   

    response.status(201).send(registerUser)

}