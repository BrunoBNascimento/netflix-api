import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Show from "./show.entity";

@Entity('episodes')
class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: "text" })
  description: string;

  @Column()
  cover: string;

  @Column()
  duration: number;

  @ManyToOne(() => Show, show => show.episodes)
  show: Show
}

export default Episode
