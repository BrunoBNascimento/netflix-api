import { DataSource } from "typeorm"
import { Movie } from "../../src/entities"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "abcbanana",
  database: "netflix",
  entities: [Movie],
  synchronize: true
})

async function run() {
  await AppDataSource.initialize()

  console.log("Data source connected")
}

export default run
