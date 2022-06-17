import { Repository } from "typeorm";
import { AppDataSource } from "../../configs/database/data-source";
import { Show } from "../entities";
import User from "../entities/user.entity";
import BadRequestException from "../exceptions/bad-request.exception";

interface CreateListDTO {
  show_id: number;
}

class ListService {
  userRepository: Repository<User>
  showRepository: Repository<Show>

  constructor() {
    this.userRepository = AppDataSource.getRepository(User)
    this.showRepository = AppDataSource.getRepository(Show)
  }

  async create(createListDto: CreateListDTO, user: User) {
    const show = await this.showRepository.findOne({ where: { id: createListDto.show_id } })

    if (!show) {
      throw new BadRequestException("Show nao achado")
    }

    user.list = [...user.list, show]

    return this.userRepository.save({
      ...user,
      password: undefined
    })
  }
}

export default ListService
