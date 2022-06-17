import express from "express"
import { UserController } from "../controllers"

import validationMiddleware from "../middlewares/validation.middleware"
import CreateUserSchema from "../schemas/create-user.schema"

const UserRouter = express.Router()

UserRouter.post("/user", validationMiddleware(CreateUserSchema), UserController.create)

export default UserRouter
