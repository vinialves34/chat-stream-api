import { inject } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { Category } from "../entities/Category";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  async execute(name: string): Promise<Category> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new AppError("Category already exists");
    }

    const category = await this.categoriesRepository.create(name);

    return category;
  }
}

export { CreateCategoryUseCase };
