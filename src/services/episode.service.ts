import { Repository } from "typeorm";
import winston from "winston"
import { AppDataSource } from "../infrastructure/database/data-source";
import { Show } from "../entities";
import Episode from "../entities/episode.entity"
import BadRequestException from "../exceptions/bad-request.exception";
import logger from "../infrastructure/logger/logger";

type CreateEpisodeDTO = Omit<Episode, "id"> & { showId: number }

class EpisodeService {
  private episodeRespository: Repository<Episode>;
  private showRepository: Repository<Show>;
  private logger: winston.Logger;

  constructor() {
    this.episodeRespository = AppDataSource.getRepository(Episode);
    this.showRepository = AppDataSource.getRepository(Show);
    this.logger = logger()
  }

  async create(createEpisode: CreateEpisodeDTO) {
    const { showId } = createEpisode;
    const show = await this.showRepository.findOne({ where: { id: showId } })

    if (!show) {
      throw new BadRequestException(`O show id: ${showId} não existe`)
    }

    const createdEpisode = await this.episodeRespository.save(createEpisode)

    show.episodes = [...show.episodes, createdEpisode]

    await this.showRepository.save(show)

    return createdEpisode
  }
}

export default EpisodeService
