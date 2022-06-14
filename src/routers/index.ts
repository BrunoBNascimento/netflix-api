import express, { Application } from "express"
import morgan from "morgan"
import MoviesRouter from "./movies.router"

const routes = [
  MoviesRouter
]
const jsonParserMiddleware = express.json()

function startRoutes(app: Application) {
  app.use(jsonParserMiddleware)
  app.use(morgan('tiny'))

  app.use(routes)
}

export default startRoutes
