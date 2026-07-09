import { TaskRepository } from "../repositories/task.repository.js";
import { AppError } from "../shared/errors/AppError.js"
import { Task,TaskPriority, TaskStatus } from "../../generated/prisma/client.js";
import { prisma } from "../config/prisma.js";

export class TaskService {
  private taskRepository: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }


  async getTasks(
    userId: string,
    filters: {
      status?: TaskStatus;
      priority?: TaskPriority;
      goalId?: string;
    },
  ) {
    return this.taskRepository.findUserTasks(userId, filters);
  }

  async getTaskById(id: string, userId: string) {
    const task = await this.taskRepository.findById(id, userId);

    if (!task) {
      throw new AppError("Task not found", 404);
    }

    return task;
  }

  async updateTask(id: string, userId: string, data: Partial<Task>) {
    const task = await this.getTaskById(id, userId);

    return this.taskRepository.update(task.id, userId, data);
  }

  async updateStatus(id: string, userId: string, status: TaskStatus) {
    return this.updateTask(id, userId, {
      status,
    });
  }

  async deleteTask(id: string, userId: string) {
    await this.getTaskById(id, userId);

    return this.taskRepository.delete(id, userId);
  }
}
