import "reflect-metadata"
import express from "express"
import morgan from "morgan"
import { DataSource } from "typeorm"

const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "abcbanana",
  database: "netflix"
})

AppDataSource.initialize()
  .then(() => {
    console.log("Data source connected")
  })
  .catch((e) => {
    console.log(e)
  })

const app: express.Application = express()

const PORT = 3000

const jsonParserMiddleware = express.json()

app.use(jsonParserMiddleware)
app.use(morgan('tiny'))

app.get("/ping", (request, response) => {
  response.send("pong")
})

app.post("/ping/:id", (request, response) => {
  response.send("pong")
})

// Atualizaçao de dados
// Entidade parcialmente
app.patch("/ping/:id", (request, response) => {
  response.send("pong")
})

// Atualizaçao de dados
// Entidade inteira
app.put("/ping/:id", (request, response) => {
  response.send("pong")
})

app.delete("/ping/:id", (request, response) => {
  response.send("pong")
})

app.listen(PORT, () => {
  console.log(`Escutando na porta: ${PORT}`)
})
