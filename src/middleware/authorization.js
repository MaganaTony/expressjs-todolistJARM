import jwt from "jsonwebtoken"

const { JWT_SECRET } = process.env

export const authorizationMiddleware = async (request, response, next) => {
    try {
        const { authorization } = request.headers

        const token = authorization.split(' ')[1]
    
        const decodedToken = await jwt.verify(token, JWT_SECRET)
    
        request.user = decodedToken
    
        next()
    } catch (error) {
        response.status(401).send({ error: "Usuario no autorizado"})
        
    }

}