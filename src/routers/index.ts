import express, { Application } from "express"
import morgan from "morgan"
import { errorHandlerMiddleware } from "../middlewares/error-handler.middleware"
import ShowsRouter from "./shows.router"

const routes = [
  ShowsRouter
]

const jsonParserMiddleware = express.json()

function startRoutes(app: Application) {
  app.use(jsonParserMiddleware)
  app.use(morgan('tiny'))

  app.use(errorHandlerMiddleware)

  app.use(routes)
}

export default startRoutes
