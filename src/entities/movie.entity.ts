import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string
}

export default Movie
