import mongoose from "mongoose";

const { Schema, model } = mongoose

const taskSchema = new Schema({
    name: {
        type: String,
        required: [ true, "El nombre de la tarea es requerido"]
    },
    complete: Boolean,
}, { timestamps: true })

const Task = model("tasks", taskSchema)

export default Task