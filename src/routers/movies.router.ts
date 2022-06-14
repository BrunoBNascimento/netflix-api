import express from "express"
import { MoviesController } from "../controllers"
import { Validation } from "../infrastructure/middlewares"
import CreateMovieSchema from "../schemas/create-movie.schema"

const router = express.Router()

router.get("/movies", MoviesController.list)
router.post("/movies", Validation(CreateMovieSchema), MoviesController.create)

export default router
