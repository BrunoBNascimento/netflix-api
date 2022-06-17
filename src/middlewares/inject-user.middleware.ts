import { NextFunction } from "express"
import { CustomResponse } from "../interfaces/custom-response.interface"
import jsonwebtoken from "jsonwebtoken"
import UnauthorizedException from "../exceptions/unauthorized.exception"
import User from "../entities/user.entity"
import { AppDataSource } from "../../configs/database/data-source"
import { CustomRequest } from "../interfaces/custom-request.interface"

export const injectUser = async (request: CustomRequest, response: CustomResponse, next: NextFunction) => {
  const jwt = request.headers.authorization

  if (!jwt) {
    throw new UnauthorizedException()
  }

  const jwtWithoutBearer = jwt.replace('Bearer ', '')

  const jwtPayload = jsonwebtoken.verify(jwtWithoutBearer, "ABCBANANA")

  if (!jwtPayload.sub) {
    throw new UnauthorizedException()
  }

  const userEntity = await AppDataSource.getRepository(User).findOne({ where: { id: +jwtPayload.sub }, relations: ["list"] })
  if (!userEntity) {
    throw new UnauthorizedException("Usuário inválido")
  }

  request.loggedUser = userEntity

  next()
}
