import { DEFAULT_CATEGORIES } from "../constants/categories.js";
import { categoryRepository } from "../repositories/category.repository.js";

import { AppError } from "../shared/errors/AppError.js";

class CategoryService {
  async getCategories(userId: string) {
    return categoryRepository.findAll(userId);
  }

  async getCategory(id: string, userId: string) {
    const category = await categoryRepository.findById(id, userId);

    if (!category) {
      throw new AppError("Category not found", 404);
    }

    return category;
  }

  async createCategory(
    userId: string,
    data: {
      name: string;
      color?: string;
      icon?: string;
    },
  ) {
    return categoryRepository.create({
      ...data,
      userId,
    });
  }

  async updateCategory(
    id: string,
    userId: string,
    data: {
      name?: string;
      color?: string;
      icon?: string;
    },
  ) {
    const category = await categoryRepository.findById(id, userId);

    if (!category) {
      throw new AppError("Category not found", 404);
    }

    return categoryRepository.update(id, data);
  }

  async deleteCategory(id: string, userId: string) {
    const category = await categoryRepository.findById(id, userId);

    if (!category) {
      throw new AppError("Category not found", 404);
    }

    return categoryRepository.softDelete(id);
  }
}

export const categoryService = new CategoryService();
