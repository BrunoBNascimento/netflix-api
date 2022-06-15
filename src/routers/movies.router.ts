import express from "express"

import { MovieController } from "../controllers"
import validationMiddleware from "../middlewares/validation.middleware"
import createMovieSchema from "../schemas/create-movie.schema"

const moviesRouter = express.Router()

moviesRouter.get("/movies", MovieController.list)
moviesRouter.post("/movies", validationMiddleware(createMovieSchema), MovieController.create)

export default moviesRouter
