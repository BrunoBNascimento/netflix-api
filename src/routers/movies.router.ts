import express from "express"

import { MovieController } from "../controllers"

const moviesRouter = express.Router()

moviesRouter.get("/movies", MovieController.list)

export default moviesRouter
