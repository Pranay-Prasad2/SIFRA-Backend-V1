export interface AIContext {
  vision: string | null;

  goals: GoalContext[];

  routines: RoutineContext[];

  availability: AvailabilityContext[];

  pendingTasks: PendingTaskContext[];

  settings: SettingsContext;
}

export interface GoalContext {
  title: string;
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
}

export interface RoutineContext {
  title: string;
  dayOfWeek: number | null;
  startTime: string;
  endTime: string;
}

export interface AvailabilityContext {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

export interface PendingTaskContext {
  title: string;
  estimatedMinutes: number;
  priority: string;
}

export interface SettingsContext {
  workHoursPerDay: number;
  breakMinutes: number;
  focusSessionMinutes: number;
}


//AI RESPONSE TYPES

export interface AIGeneratedDay {

  tasks: GeneratedTask[];

  schedule: GeneratedBlock[];
}

export interface GeneratedTask {

  title: string;

  description?: string;

  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

  estimatedMinutes: number;

  goalTitle?: string;
}

export interface GeneratedBlock {

  title: string;

  type:
    | "TASK"
    | "ROUTINE"
    | "BREAK"
    | "BUFFER"
    | "PERSONAL";

  startTime: string;

  endTime: string;

  taskTitle?: string;
}