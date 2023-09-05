import mongoose from "mongoose";

const {
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOSTNAME
} = process.env

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}?retryWrites=true&w=majority`

export const DBConn =  async () => {
    try {
        
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Conexion a MongoDB exitosa!");

    } catch (error) {
        console.log("Error al conectase con MongoDB", error);
    }
}