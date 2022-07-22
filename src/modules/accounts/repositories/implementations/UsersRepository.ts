import { FindOneOptions, Repository } from "typeorm";

import { AppDataSource } from "../../../../database/config/app-data-source";
import { ICreateUserDTO } from "../../dto/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    name,
    email,
    password,
    username,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      username,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const findOptions: FindOneOptions<User> = {
      where: {
        email,
      },
    };

    const user = await this.repository.findOne(findOptions);

    return user;
  }

  async findById(id: string): Promise<User> {
    const findOptions: FindOneOptions<User> = {
      where: {
        id,
      },
    };

    const user = await this.repository.findOne(findOptions);

    return user;
  }
}

export { UsersRepository };
