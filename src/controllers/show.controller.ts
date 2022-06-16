import { Request, Response } from "express"
import { ShowService } from "../services"
import HTTP_STATUS from "../enums/http-status.enum"
import errorHandler from "../middlewares/error-handler.middleware"

const showService = new ShowService()

class ShowController {
  public static async list(request: Request, response: Response) {
    const shows = await showService.list()

    response.json(shows)
  }

  public static async listOne(request: Request, response: Response) {
    try {
      const { params: { id } } = request;
      const shows = await showService.listOne(+id)

      response.json(shows)
    } catch (e) {
      errorHandler(e, response)
    }
  }

  public static async delete(request: Request, response: Response) {
    try {
      const { params: { id } } = request;
      const shows = await showService.delete(+id)

      response.json(shows)
    } catch (e) {
      errorHandler(e, response)
    }
  }

  public static async create(request: Request, response: Response) {
    const shows = request.body

    const result = await showService.create(shows)

    response.status(HTTP_STATUS.CREATED).json(result)
  }
}

export default ShowController
