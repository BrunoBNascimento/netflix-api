import { NextFunction } from "express"
import jsonwebtoken from "jsonwebtoken"
import { AppDataSource } from "../infrastructure/database/data-source"
import User from "../entities/user.entity"
import UnauthorizedException from "../exceptions/unauthorized.exception"
import { CustomRequest } from "../interfaces/custom-request.interface"
import { CustomResponse } from "../interfaces/custom-response.interface"

const injectUser = async (request: CustomRequest, response: CustomResponse, next: NextFunction) => {
  const token = request.headers.authorization?.replace("Bearer ", "")

  if (!token) {
    throw new UnauthorizedException()
  }

  const userRepository = AppDataSource.getRepository(User)
  const secret = process.env.SECRET || ""
  const payload = await jsonwebtoken.verify(token, secret)

  if (!payload.sub) {
    throw new UnauthorizedException()
  }

  const loggedUser = await userRepository.findOne({ where: { id: +payload.sub } })

  if (!loggedUser) {
    throw new UnauthorizedException()
  }

  request.loggedUser = loggedUser

  next()
}

export default injectUser
