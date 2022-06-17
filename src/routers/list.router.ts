import express from "express"
import passport from "passport"

import ListController from "../controllers/list.controller"
import { injectUser } from "../middlewares/inject-user.middleware"

const listRouter = express.Router()

listRouter.get("/list", passport.authenticate('jwt', { session: false }), injectUser, ListController.list)
listRouter.post("/list", passport.authenticate('jwt', { session: false }), injectUser, ListController.create)

export default listRouter
