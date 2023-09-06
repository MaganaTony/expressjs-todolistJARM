import mongoose from "mongoose";

const { Schema, model } = mongoose

const taskSchema = new Schema({
    name: {
        type: String,
        required: [ true, "El nombre de la tarea es requerido"]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    complete: Boolean,
}, { timestamps: true })

const Task = model("tasks", taskSchema)

export default Task