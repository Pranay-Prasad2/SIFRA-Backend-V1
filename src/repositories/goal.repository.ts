import { prisma } from "../config/prisma.js";
import {
  Goal,
  GoalPriority,
  GoalStatus,
} from "../../generated/prisma/client.js";

export class GoalRepository {
  async findUserGoals(
    userId: string,
    filters?: {
      status?: GoalStatus;
      priority?: GoalPriority;
      categoryId?: string;
    },
  ): Promise<Goal[]> {
    return prisma.goal.findMany({
      where: {
        userId,

        ...(filters?.status && {
          status: filters.status,
        }),

        ...(filters?.priority && {
          priority: filters.priority,
        }),

        ...(filters?.categoryId && {
          categoryId: filters.categoryId,
        }),
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findById(id: string, userId: string): Promise<Goal | null> {
    return prisma.goal.findFirst({
      where: {
        id,
        userId,
      },
    });
  }

  async create(data: {
    title: string;
    description?: string;
    priority?: GoalPriority;
    deadline?: Date;
    categoryId: string;
    userId: string;
  }): Promise<Goal> {

    return prisma.goal.create({
      data,
    });
  }

  async update(id: string, userId: string, data: Partial<Goal>): Promise<Goal> {
    return prisma.goal.update({
      where: {
        id,
        userId,
      },
      data,
    });
  }

  async delete(id: string, userId: string): Promise<Goal> {
    return prisma.goal.delete({
      where: {
        id,
        userId,
      },
    });
  }
}
