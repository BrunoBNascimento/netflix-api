import "reflect-metadata"
import express from "express"

import databaseInitialize from "./configs/database/data-source"
import startRoutes from "./src/routers"

const app: express.Application = express()

const PORT = 3000

databaseInitialize()
startRoutes(app)

app.listen(PORT, () => {
  console.log(`Escutando na porta: ${PORT}`)
})
