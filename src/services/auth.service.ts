import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import UnauthorizedException from "../exceptions/unauthorized.exception"
import UserService from "./user.service"

class AuthService {
  /**
   * Realiza autenticação do usuário
   *
   * @param email email do usuário
   * @param password email do usuário
   * @returns LoginResponse
   *
   */
  async login(email: string, password: string) {
    const userService = new UserService()
    const secret = process.env.SECRET || ""

    const user = await userService.getUserByEmail(email)

    if (!user) {
      throw new UnauthorizedException()
    }

    const passwordMatches = await bcrypt.compare(password, user.password)

    if (!passwordMatches) {
      throw new UnauthorizedException()
    }

    const token = jwt.sign({
      sub: user.id,
      iat: Date.now(),
      email: user.email
    }, secret)

    return {
      token
    }
  }
}

export default AuthService
