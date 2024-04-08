import AppDataSource from "../data-source";
import { CategoryEntity } from "../entities/CategoryEntity";
class CategoryService {
  private categoryRepository = AppDataSource.getRepository(CategoryEntity);

  async getAll() {
    console.log("CategoryService");    
    return this.categoryRepository.find();
  }
  async getById(id: number) {
    console.log("CategoryService");
    return this.categoryRepository.findOneBy({ id: id });
  }
  async create(category: CategoryEntity) {
    console.log("CategoryService");
    const newCategory = this.categoryRepository.create(category);
    return this.categoryRepository.save(newCategory);
  }
  async update(id: string, category: CategoryEntity) {
    console.log("CategoryService");
    return this.categoryRepository.update(id, category);
  }

  async delete(id: string) {
    console.log("CategoryService");
    const category = this.categoryRepository.findOneBy({ id: +id });
    // category.deletePlants(category.)
    return this.categoryRepository.delete(id);
  }
}

export default CategoryService;
