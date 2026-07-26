import { AIContext } from "../../types/ai.types.js";
import {
  Goal,
  Routine,
  Availability,
  Task,
  Settings,
} from "../../../generated/prisma/client.js";

interface BuildContextParams {
  vision: string | null;
  goals: Goal[];
  routines: Routine[];
  availability: Availability[];
  pendingTasks: Task[];
  settings: {
    workHoursPerDay: number;
    breakMinutes: number;
    focusSessionMinutes: number;
  };
}

export function buildAIContext({
  vision,
  goals,
  routines,
  availability,
  pendingTasks,
  settings,
}: BuildContextParams): AIContext {
  return {
    vision,

    goals: goals.map((goal) => ({
      title: goal.title,
      priority: goal.priority,
    })),

    routines: routines.map((routine) => ({
      title: routine.title,
      dayOfWeek: routine.dayOfWeek,
      startTime: routine.startTime,
      endTime: routine.endTime,
    })),

    availability: availability.map((slot) => ({
      dayOfWeek: slot.dayOfWeek,
      startTime: slot.startTime,
      endTime: slot.endTime,
    })),

    pendingTasks: pendingTasks.map((task) => ({
      title: task.title,
      estimatedMinutes: task.estimatedMinutes,
      priority: task.priority,
    })),

    settings: {
      workHoursPerDay: settings.workHoursPerDay,
      breakMinutes: settings.breakMinutes,
      focusSessionMinutes: settings.focusSessionMinutes,
    },
  };
}
