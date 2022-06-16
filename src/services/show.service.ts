import { Repository } from "typeorm"
import { AppDataSource } from "../../configs/database/data-source"
import { Show } from "../entities"
import NotFoundException from "../exceptions/not-found.exception";

interface CreateShowDTO {
  title: string;
}

class ShowService {
  private showRepository: Repository<Show>;

  constructor() {
    this.showRepository = AppDataSource.getRepository(Show);
  }

  /**
   * Retorna todos o show
   *
   * @returns Retorna todos o show
   *
   * @beta
   */
  list() {
    return this.showRepository.find();
  }

  /**
   * Retorna todos o show
   *
   * @returns Retorna todos o show
   *
   * @beta
   */
  async listOne(id: number) {
    const show = await this.showRepository.findOne({ where: { id } });

    if (show) {
      return show;
    }

    throw new NotFoundException(`O show id: ${id} não foi encontrado`);
  }

  /**
   * Deleta um show por id
   *
   * @returns o show deletado
   *
   * @beta
   */
  async delete(id: number) {
    const show = await this.showRepository.delete(id);

    if (show.affected) {
      return show;
    }

    throw new NotFoundException(`O show id: ${id} não foi encontrado`);
  }

  /**
   * Cria um show
   *
   * @returns O show criado
   *
   */
  create(show: CreateShowDTO) {
    return this.showRepository.save(show);
  }
}

export default ShowService
