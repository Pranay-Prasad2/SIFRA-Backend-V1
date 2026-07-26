import { prisma } from "../config/prisma.js";
import { Category } from "../../generated/prisma/client.js";

export class CategoryRepository {
  async findAll(userId: string): Promise<Category[]> {
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

  async findById(id: string, userId: string): Promise<Category | null> {
    return prisma.category.findFirst({
      where: {
        id,
        userId,
        isActive: true,
      },
    });
  }

  async create(data: {
    name: string;
    color?: string;
    icon?: string;
    userId: string;
  }): Promise<Category> {
    return prisma.category.create({
      data,
    });
  }

  async update(
    id: string,
    data: {
      name?: string;
      color?: string;
      icon?: string;
    },
  ): Promise<Category> {
    return prisma.category.update({
      where: { id },
      data,
    });
  }

  async softDelete(id: string): Promise<Category> {
    return prisma.category.update({
      where: { id },
      data: {
        isActive: false,
      },
    });
  }
}

export const categoryRepository = new CategoryRepository();
