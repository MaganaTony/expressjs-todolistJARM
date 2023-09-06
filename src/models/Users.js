import mongoose from "mongoose";

const { Schema, model } = mongoose

const userSchema = new Schema({
    email :{
        type: String,
        required: [ true, "Un correo electronico es requerido"],
        unique: true
    },
    name: String,
    lastName: String,
    complete: Boolean,
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'tasks',
    }]
}, { timestamps: true })

const User = model("users", userSchema)

export default User