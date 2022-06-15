import { NextFunction, Request, Response } from "express"
import { MovieService } from "../services"
import HTTP_STATUS from "../constants/http-status.constants"

const movieService = new MovieService()

class MovieController {
  public static async list(request: Request, response: Response) {
    const movies = await movieService.list()

    response.json(movies)
  }

  public static async create(request: Request, response: Response, next: NextFunction) {
    const movie = request.body
    if (!movie) {
      next()
    }
    const result = await movieService.create(movie)

    response.status(HTTP_STATUS.CREATED).json(result)
  }
}

export default MovieController
