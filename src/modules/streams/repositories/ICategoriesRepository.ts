import { Category } from "../entities/Category";

interface ICategoriesRepository {
  findById(id: string): Promise<Category>;
  findByName(name: string): Promise<Category>;
  create(name: string): Promise<Category>;
}

export { ICategoriesRepository };
