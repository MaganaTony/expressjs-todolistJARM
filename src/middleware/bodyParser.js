import { json } from "express"
import BodyParser from "body-parser"
import BodyParserXml from "body-parser-xml"

BodyParserXml(BodyParser)

export const jsonParser = json({ limit: "500kb" })

export const xmlParser = BodyParser.xml()
