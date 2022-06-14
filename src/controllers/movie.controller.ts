import { Request, Response } from "express"
import { MovieService } from "../services"

class MovieController {
  public static async list(request: Request, response: Response) {
    const movieService = new MovieService()
    const movies = await movieService.list()

    response.send(movies)
  }
}

export default MovieController
