import { prisma } from "../config/prisma.js";
import { ActivitySession } from "../../generated/prisma/client.js";

export class ActivitySessionRepository {
  async findActiveSession(userId: string) {
    return prisma.activitySession.findFirst({
      where: {
        userId,
        endedAt: null,
      },
      include: {
        focusBlock: {
          include: {
            category: true,
          },
        },
      },
    });
  }

  async create(data: {
    focusBlockId: string;
    userId: string;
    startedAt: Date;
  }): Promise<ActivitySession> {
    return prisma.activitySession.create({
      data,
    });
  }

  async findById(id: string, userId: string) {
    return prisma.activitySession.findFirst({
      where: {
        id,
        userId,
      },
      include: {
        focusBlock: {
          include: {
            category: true,
          },
        },
      },
    });
  }

  async stop(id: string, endedAt: Date, durationMinutes: number) {
    return prisma.activitySession.update({
      where: {
        id,
      },
      data: {
        endedAt,
        durationMinutes,
      },
    });
  }

  async findHistory(userId: string) {
    return prisma.activitySession.findMany({
      where: {
        userId,
        endedAt: {
          not: null,
        },
      },
      include: {
        focusBlock: {
          include: {
            category: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async delete(id: string) {
    return prisma.activitySession.delete({
      where: {
        id,
      },
    });
  }
}

export const activitySessionRepository = new ActivitySessionRepository();
