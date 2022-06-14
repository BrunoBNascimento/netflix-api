import { Repository } from "typeorm"
import { AppDataSource } from "../../configs/database/data-source"
import Movie from "../entities/movie.entity"

class MovieService {
  private movieRepository: Repository<Movie>

  constructor() {
    this.movieRepository = AppDataSource.getRepository(Movie)
  }

  list() {
    return this.movieRepository.find()
  }
}

export default MovieService
