import express from "express"
import MoviesRouter from "./movies.router"
import morgan from "morgan"

const routes = [
  MoviesRouter
]

const PORT = 3000

export default function(app: express.Application, port: number = PORT) {
  const jsonParserMiddleware = express.json()

  app.use(jsonParserMiddleware)
  app.use(morgan('tiny'))

  app.use(routes)

  app.listen(port, () => {
    console.log(`Escutando na porta: ${port}`)
  })
}
