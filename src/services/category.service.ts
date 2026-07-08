import { DEFAULT_CATEGORIES } from "../constants/categories.js";
import { CategoryRepository } from "../repositories/category.repository.js";


export class CategoryService {

  private categoryRepository: CategoryRepository;


  constructor() {
    this.categoryRepository = new CategoryRepository();
  }


  async getDefaultCategories() {

    return DEFAULT_CATEGORIES;

  }


  async getUserCategories(userId: string) {

    return this.categoryRepository.findUserCategories(userId);

  }

}