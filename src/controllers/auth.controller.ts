import { Request } from "express";
import { CustomResponse } from "../interfaces/custom-response.interface";
import AuthService from "../services/auth.service";

const authService = new AuthService()

class AuthController {
  public static async login(request: Request, response: CustomResponse) {
    const { body: { email, password } } = request;

    try {
      const authenticated = await authService.login(email, password)

      response.send(authenticated)
    } catch (e) {
      console.log(`Erro ao logar usuário! Dados: ${JSON.stringify({ email })}`)

      response.errorHandler && response.errorHandler(e)
    }
  }
}

export default AuthController
