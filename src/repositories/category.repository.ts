import { prisma } from "../config/prisma.js";
import { Category } from "../../generated/prisma/client.js";

export class CategoryRepository {
  async findUserCategories(userId: string): Promise<Category[]> {
    return prisma.category.findMany({
      where: {
        userId,
        isActive: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  async findByName(name: string, userId: string): Promise<Category | null> {
    return prisma.category.findFirst({
      where: {
        name,
        userId,
      },
    });
  }

  async create(data: {
    name: string;
    icon?: string;
    color?: string;
    weeklyTargetHours: number;
    userId: string;
  }): Promise<Category> {
    return prisma.category.create({
      data,
    });
  }
}
