import express, { Application } from "express"
import morgan from "morgan"
import { errorHandlerMiddleware } from "../middlewares/error-handler.middleware"
import AuthRouter from "./auth.router"
import EpisodesRouter from "./episode.router"
import ListRouter from "./list.router"
import ShowsRouter from "./shows.router"
import UserRouter from "./user.router"

const routes = [
  ShowsRouter,
  AuthRouter,
  UserRouter,
  EpisodesRouter,
  ListRouter
]

const jsonParserMiddleware = express.json()

function startRoutes(app: Application) {
  app.use(jsonParserMiddleware)
  app.use(morgan('tiny'))

  app.use(errorHandlerMiddleware)

  app.use(routes)
}

export default startRoutes
