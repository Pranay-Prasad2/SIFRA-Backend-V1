import { prisma } from "../config/prisma.js";

export class RoutineRepository {
  async create(data: any) {
    return prisma.routine.create({
      data,
    });
  }

  async findAll(userId: string) {
    return prisma.routine.findMany({
      where: {
        userId,
      },
      orderBy: {
        dayOfWeek: "asc",
      },
    });
  }

  async findById(id: string, userId: string) {
    return prisma.routine.findFirst({
      where: {
        id,
        userId,
      },
    });
  }

  async update(id: string, userId: string, data: any) {
    return prisma.routine.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string) {
    return prisma.routine.delete({
      where: {
        id,
      },
    });
  }

  async toggle(id: string, isActive: boolean) {
    return prisma.routine.update({
      where: {
        id,
      },
      data: {
        isActive,
      },
    });
  }
}
