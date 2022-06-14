import { Request, Response } from "express"
import MovieService from "../services/movies.service"

class MoviesController {
  public static async list(req: Request, res: Response) {
    const moviesService = new MovieService()
    const data = await moviesService.list()

    res.send(data)
  }

  public static async create(req: Request, res: Response) {
    const moviesService = new MovieService()
    const movie = req.body

    const data = await moviesService.create(movie)

    res.send(data)
  }
}

export default MoviesController
