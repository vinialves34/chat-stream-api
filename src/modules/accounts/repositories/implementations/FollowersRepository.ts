import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database/config/app-data-source";
import { ICreateFollowerDTO } from "../../dto/ICreateFollowerDTO";
import { Follower } from "../../entities/Follower";
import { IFollowersRepository } from "../IFollowersRepository";

class FollowersRepository implements IFollowersRepository {
  private repository: Repository<Follower>;

  constructor() {
    this.repository = AppDataSource.getRepository(Follower);
  }

  async create({
    user_followed_id,
    user_follower_id,
  }: ICreateFollowerDTO): Promise<void> {
    const follower = this.repository.create({
      user_followed_id,
      user_follower_id,
    });

    await this.repository.save(follower);
  }
}

export { FollowersRepository };
