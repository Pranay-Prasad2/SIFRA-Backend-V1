import { prisma } from "../config/prisma.js";

export class AnalyticsRepository {
  async getSessions(userId: string) {
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
        startedAt: "asc",
      },
    });
  }
}

export const analyticsRepository = new AnalyticsRepository();
