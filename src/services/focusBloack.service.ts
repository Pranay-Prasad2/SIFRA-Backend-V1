import { AppError } from "../shared/errors/AppError.js";
import { CategoryRepository } from "../repositories/category.repository.js";
import { FocusBlockRepository } from "../repositories/focusBlock.repository.js";

const categoryRepository = new CategoryRepository();
const focusBlockRepository = new FocusBlockRepository();

export class FocusBlockService {
  async getFocusBlocks(userId: string) {
    return focusBlockRepository.findAll(userId);
  }

  async getFocusBlock(id: string, userId: string) {
    const focusBlock = await focusBlockRepository.findById(id, userId);

    if (!focusBlock) {
      throw new AppError("Focus block not found", 404);
    }

    return focusBlock;
  }

  async createFocusBlock(
    userId: string,
    data: {
      name: string;
      description?: string;
      weeklyTargetMinutes: number;
      categoryId: string;
    },
  ) {
    const category = await categoryRepository.findById(data.categoryId, userId);

    if (!category) {
      throw new AppError("Category not found", 404);
    }

    return focusBlockRepository.create({
      ...data,
      userId,
    });
  }

  async updateFocusBlock(
    id: string,
    userId: string,
    data: {
      name?: string;
      description?: string;
      weeklyTargetMinutes?: number;
      categoryId?: string;
    },
  ) {
    const focusBlock = await focusBlockRepository.findById(id, userId);

    if (!focusBlock) {
      throw new AppError("Focus block not found", 404);
    }

    if (data.categoryId) {
      const category = await categoryRepository.findById(
        data.categoryId,
        userId,
      );

      if (!category) {
        throw new AppError("Category not found", 404);
      }
    }

    return focusBlockRepository.update(id, data);
  }

  async deleteFocusBlock(id: string, userId: string) {
    const focusBlock = await focusBlockRepository.findById(id, userId);

    if (!focusBlock) {
      throw new AppError("Focus block not found", 404);
    }

    return focusBlockRepository.softDelete(id);
  }
}
