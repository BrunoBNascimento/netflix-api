import { Request } from "express"
import { ShowService } from "../services"
import HTTP_STATUS from "../enums/http-status.enum"
import { CustomResponse } from "../interfaces/custom-response.interface"

const showService = new ShowService()

class ShowController {
  public static async list(request: Request, response: CustomResponse) {
    try {
      const shows = await showService.list()
      response.json(shows)
    } catch (e) {
      response.errorHandler && response.errorHandler(e)
    }
  }

  public static async listOne(request: Request, response: CustomResponse) {
    try {
      const { params: { id } } = request;
      const shows = await showService.listOne(+id)

      response.json(shows)
    } catch (e) {
      response.errorHandler && response.errorHandler(e)
    }
  }

  public static async delete(request: Request, response: CustomResponse) {
    try {
      const { params: { id } } = request;
      const shows = await showService.delete(+id)

      response.json(shows)
    } catch (e) {
      response.errorHandler && response.errorHandler(e)
    }
  }

  public static async create(request: Request, response: CustomResponse) {
    try {
      const shows = request.body

      const result = await showService.create(shows)

      response.status(HTTP_STATUS.CREATED).json(result)
    } catch (e) {
      response.errorHandler && response.errorHandler(e)
    }
  }
}

export default ShowController
