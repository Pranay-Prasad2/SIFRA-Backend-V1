import { prisma } from "../config/prisma.js";
import { FocusBlock } from "../../generated/prisma/client.js";

export class FocusBlockRepository {
  async findAll(userId: string) {
    return prisma.focusBlock.findMany({
      where: {
        userId,
        isActive: true,
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  async findById(id: string, userId: string) {
    return prisma.focusBlock.findFirst({
      where: {
        id,
        userId,
        isActive: true,
      },
      include: {
        category: true,
      },
    });
  }

  async create(data: {
    name: string;
    description?: string;
    weeklyTargetMinutes: number;
    categoryId: string;
    userId: string;
  }): Promise<FocusBlock> {
    return prisma.focusBlock.create({
      data,
    });
  }

  async update(
    id: string,
    data: {
      name?: string;
      description?: string;
      weeklyTargetMinutes?: number;
      categoryId?: string;
    },
  ): Promise<FocusBlock> {
    return prisma.focusBlock.update({
      where: {
        id,
      },
      data,
    });
  }

  async softDelete(id: string): Promise<FocusBlock> {
    return prisma.focusBlock.update({
      where: {
        id,
      },
      data: {
        isActive: false,
      },
    });
  }
}
