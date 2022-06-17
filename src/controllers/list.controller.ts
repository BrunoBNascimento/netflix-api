import UnauthorizedException from "../exceptions/unauthorized.exception";
import { CustomRequest } from "../interfaces/custom-request.interface";
import { CustomResponse } from "../interfaces/custom-response.interface";
import ListService from "../services/list.service";

const listService = new ListService()

class ListController {
  public static async list(request: CustomRequest, response: CustomResponse) {
    try {
      if (request.loggedUser) {
        response.json(request.loggedUser.list)
      } else {
        response.json()
      }
    } catch (e) {
      console.log(`Erro ao trazer lista para o usuário ${request.loggedUser && request.loggedUser.email}`)

      response.errorHandler && response.errorHandler(e)
    }
  }

  public static async create(request: CustomRequest, response: CustomResponse) {
    const { body, loggedUser } = request;

    if (!loggedUser) {
      throw new UnauthorizedException()
    }

    try {
      const list = await listService.create(body, loggedUser)

      response.json(list)
    } catch (e) {
      console.log(`Erro ao salvar na lista do usuário ${request.loggedUser && request.loggedUser.email}`)

      response.errorHandler && response.errorHandler(e)
    }
  }
}

export default ListController
