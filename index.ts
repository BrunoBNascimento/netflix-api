import "dotenv/config"
import "reflect-metadata"
import express from "express"
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"
import passport from "passport"
import databaseInitialize from "./src/infrastructure/database/data-source"
import startRoutes from "./src/routers"

const app: express.Application = express()

const PORT = 3000
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}

const strategy = new JwtStrategy(opts, function(payload, done) {
  console.log(payload)
  return done(null, {});
})

passport.use(strategy);

databaseInitialize()
startRoutes(app)

app.listen(PORT, () => {
  console.log(`Escutando na porta: ${PORT}`)
})
