import { Repository } from "typeorm";

import { AppDataSource } from "../../../../database/config/app-data-source";
import { Category } from "../../entities/Category";
import { ICategoriesRepository } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = AppDataSource.getRepository(Category);
  }

  async findById(id: string): Promise<Category> {
    const category = await this.repository.findOne({
      id,
    });

    return category;
  }

  async create(name: string): Promise<Category> {
    const category = await this.repository.create({
      name,
    });

    await this.repository.save(category);

    return category;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({
      name,
    });

    return category;
  }
}

export { CategoriesRepository };
