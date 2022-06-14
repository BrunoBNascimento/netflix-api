import "reflect-metadata"
import express from "express"
import start from "./src/routers"
import database from "./config/database/data-source"

const app: express.Application = express()

database()
start(app)
