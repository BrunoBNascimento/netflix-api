import { Repository } from "typeorm"
import { AppDataSource } from "../../config/database/data-source"
import { Movie } from "../entities"

class MovieService {
  private movieRepository: Repository<Movie>

  constructor() {
    this.movieRepository = AppDataSource.getRepository(Movie)
  }

  /**
   * Retorna todos os filmes
   *
   * @returns Promise<Movie[]> retorna uma promise que quando resolvida entrega o array de filmes
   *
   */
  list() {
    return this.movieRepository.find()
  }

  /**
   * Retorna todos os filmes
   * @param movie Um objeto do tipo filme a ser salvo
   * @returns Promise<Movie[]> retorna uma promise que quando resolvida entrega o array de filmes
   *
   */
  create(movie: Movie) {
    return this.movieRepository.save(
      this.movieRepository.create(movie)
    )
  }
}

export default MovieService
