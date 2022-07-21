import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { User } from "../../accounts/entities/User";
import { Category } from "./Category";

@Entity("streams")
class Stream {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne((type) => User)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  @Column()
  user_id: string;

  @ManyToOne((type) => Category)
  @JoinColumn({ name: "category_id", referencedColumnName: "id" })
  @Column()
  category_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  closed_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { Stream };
