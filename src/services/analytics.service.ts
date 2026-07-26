import { analyticsRepository } from "../repositories/analytics.repository.js";

export class AnalyticsService {
  async getDashboard(userId: string) {
    const sessions = await analyticsRepository.getSessions(userId);

    return {
      streak: this.calculateStreak(sessions),

      focusHours: this.calculateFocusHours(sessions),

      heatmap: this.calculateHeatmap(sessions),

      categoryProgress: this.calculateCategoryProgress(sessions),

      weeklyComparison: this.calculateWeeklyComparison(sessions),
    };
  }

  private calculateFocusHours(sessions: any[]) {
    const now = new Date();

    const today = sessions.filter(
      (s) => new Date(s.startedAt).toDateString() === now.toDateString(),
    );

    const weekStart = new Date();

    weekStart.setDate(now.getDate() - now.getDay());

    const week = sessions.filter((s) => new Date(s.startedAt) >= weekStart);

    return {
      today: this.totalMinutes(today),

      week: this.totalMinutes(week),

      lifetime: this.totalMinutes(sessions),
    };
  }

  private totalMinutes(sessions: any[]) {
    return sessions.reduce((sum, s) => sum + (s.durationMinutes ?? 0), 0);
  }

  private calculateHeatmap(sessions: any[]) {
    const map: any = {};

    sessions.forEach((session) => {
      const date = new Date(session.startedAt).toISOString().split("T")[0];

      map[date] = (map[date] || 0) + (session.durationMinutes ?? 0);
    });

    return Object.entries(map).map(([date, minutes]) => ({
      date,

      minutes,
    }));
  }

  private calculateCategoryProgress(sessions: any[]) {
    const categories: any = {};

    sessions.forEach((session) => {
      const category = session.focusBlock.category;

      if (!categories[category.id]) {
        categories[category.id] = {
          category: category.name,
          completedMinutes: 0,
        };
      }

      categories[category.id].completedMinutes += session.durationMinutes ?? 0;
    });

    return Object.values(categories);
  }

  private calculateWeeklyComparison(sessions: any[]) {
    const now = new Date();

    const startCurrent = new Date();

    startCurrent.setDate(now.getDate() - now.getDay());

    const startPrevious = new Date(startCurrent);

    startPrevious.setDate(startPrevious.getDate() - 7);

    const current = sessions.filter(
      (s) => new Date(s.startedAt) >= startCurrent,
    );

    const previous = sessions.filter(
      (s) =>
        new Date(s.startedAt) >= startPrevious &&
        new Date(s.startedAt) < startCurrent,
    );

    return {
      currentWeek: this.totalMinutes(current),

      previousWeek: this.totalMinutes(previous),
    };
  }

  private calculateStreak(sessions: any[]) {
    const days = new Set(
      sessions.map((s) => new Date(s.startedAt).toISOString().split("T")[0]),
    );

    let current = 0;

    let date = new Date();

    while (days.has(date.toISOString().split("T")[0])) {
      current++;

      date.setDate(date.getDate() - 1);
    }

    return {
      current,

      best: current,
    };
  }
}
