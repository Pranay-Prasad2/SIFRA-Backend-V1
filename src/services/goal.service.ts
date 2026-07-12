import {
  Goal,
  GoalPriority,
  GoalStatus,
} from "../../generated/prisma/client.js";
import { AppError } from "../shared/errors/AppError.js";
import { GoalRepository } from "../repositories/goal.repository.js";

export class GoalService {
  private goalRepository = new GoalRepository();

  async createGoal(
    userId: string,
    data: {
      title: string;
      description?: string;
      priority?: GoalPriority;
      deadline?: Date;
      categoryId: string;
    },
  ): Promise<Goal> {
    return this.goalRepository.create({
      ...data,
      userId,
    });
  }

  async getGoals(
    userId: string,
    filters?: {
      status?: GoalStatus;
      priority?: GoalPriority;
      categoryId?: string;
    },
  ): Promise<Goal[]> {
    return this.goalRepository.findUserGoals(userId, filters);
  }

  async getGoalById(id: string, userId: string): Promise<Goal> {
    const goal = await this.goalRepository.findById(id, userId);

    if (!goal) {
      throw new AppError("Goal not found", 404);
    }

    return goal;
  }

  async updateGoal(
    id: string,
    userId: string,
    data: Partial<Goal>,
  ): Promise<Goal> {
    await this.getGoalById(id, userId);

    return this.goalRepository.update(id, userId, data);
  }

  async updateStatus(
    id: string,
    userId: string,
    status: GoalStatus,
  ): Promise<Goal> {
    await this.getGoalById(id, userId);

    return this.goalRepository.update(id, userId, {
      status,
    });
  }

  async deleteGoal(id: string, userId: string): Promise<void> {
    await this.getGoalById(id, userId);

    await this.goalRepository.delete(id, userId);
  }
}
