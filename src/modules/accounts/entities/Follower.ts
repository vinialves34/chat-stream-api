import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { User } from "./User";

@Entity("followers")
class Follower {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, (user) => user.id)
  @Column()
  user_follower_id: string;

  @OneToOne(() => User, (user) => user.id)
  @Column()
  user_followed_id: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Follower };
