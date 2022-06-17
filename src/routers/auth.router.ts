import express from "express"

import { AuthController } from "../controllers"
import validationMiddleware from "../middlewares/validation.middleware"
import LoginSchema from "../schemas/login.schema"

const AuthRouter = express.Router()

AuthRouter.post("/auth", validationMiddleware(LoginSchema), AuthController.login)

export default AuthRouter
