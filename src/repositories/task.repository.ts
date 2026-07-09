import { prisma } from "../config/prisma.js";
import {
  Task,
  TaskStatus,
  TaskPriority,
} from "../../generated/prisma/client.js";

export class TaskRepository {
  async findUserTasks(
    userId: string,
    filters?: {
      status?: TaskStatus;
      priority?: TaskPriority;
      goalId?: string;
    },
  ): Promise<Task[]> {
    return prisma.task.findMany({
      where: {
        userId,

        ...(filters?.status && {
          status: filters.status,
        }),

        ...(filters?.priority && {
          priority: filters.priority,
        }),

        ...(filters?.goalId && {
          goalId: filters.goalId,
        }),
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findById(id: string, userId: string): Promise<Task | null> {
    return prisma.task.findFirst({
      where: {
        id,
        userId,
      },
    });
  }

  async update(id: string, userId: string, data: Partial<Task>): Promise<Task> {
    return prisma.task.update({
      where: {
        id,
        userId,
      },

      data,
    });
  }

  async delete(id: string, userId: string): Promise<Task> {
    return prisma.task.delete({
      where: {
        id,
        userId,
      },
    });
  }
}
