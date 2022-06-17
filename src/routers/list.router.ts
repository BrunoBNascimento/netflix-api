import express from "express"
import passport from "passport"
import ListController from "../controllers/list.controller"
import injectUser from "../middlewares/inject-user.middleware"

const ListRouter = express.Router()

ListRouter.get("/list", passport.authenticate('jwt', { session: false }), injectUser, ListController.list)

ListRouter.post("/list", passport.authenticate('jwt', { session: false }), injectUser, ListController.add)

ListRouter.delete("/list/:showId", passport.authenticate('jwt', { session: false }), injectUser, ListController.remove)

export default ListRouter
