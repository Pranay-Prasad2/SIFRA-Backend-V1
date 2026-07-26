import { prisma } from "../config/prisma.js";

import { buildAIContext } from "../ai/parsers/context.builder.js";
import { OpenAIProvider } from "../ai/providers/openai.provider.js";

export class AIService {
  private openAIProvider = new OpenAIProvider();

  async generateDay(userId: string, instruction: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        goal: true,
        routines: true,
        availability: true,
        task: {
          where: {
            status: "PENDING",
          },
        },
        settings: true,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const settings = user.settings ?? {
      workHoursPerDay: 8,
      breakMinutes: 15,
      focusSessionMinutes: 60,
    };

    const context = buildAIContext({
      vision: user.vision,
      goals: user.goal,
      routines: user.routines,
      availability: user.availability,
      pendingTasks: user.task,
      settings,
    });

    const response = await this.openAIProvider.generateSchedule(
      context,
      instruction,
    );

    return response;
  }
}