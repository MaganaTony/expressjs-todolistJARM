import { json } from "express"

export const jsonParser = json({ limit: "500kb" })
