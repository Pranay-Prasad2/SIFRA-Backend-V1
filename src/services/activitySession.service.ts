import { AppError } from "../shared/errors/AppError.js";
import { activitySessionRepository } from "../repositories/activitySession.repository.js";
import { FocusBlockRepository } from "../repositories/focusBlock.repository.js";

const focusBlockRepository = new FocusBlockRepository();

export class ActivitySessionService {
  async startSession(userId: string, focusBlockId: string) {
    const activeSession =
      await activitySessionRepository.findActiveSession(userId);

    if (activeSession) {
      throw new AppError("Another session is already running", 400);
    }

    const focusBlock = await focusBlockRepository.findById(
      focusBlockId,
      userId,
    );

    if (!focusBlock) {
      throw new AppError("Focus block not found", 404);
    }

    return activitySessionRepository.create({
      focusBlockId,

      userId,

      startedAt: new Date(),
    });
  }

  async stopSession(id: string, userId: string) {
    const session = await activitySessionRepository.findById(id, userId);

    if (!session) {
      throw new AppError("Session not found", 404);
    }

    if (session.endedAt) {
      throw new AppError("Session already completed", 400);
    }

    const endedAt = new Date();

    const durationMinutes = Math.floor(
      (endedAt.getTime() - session.startedAt.getTime()) / 60000,
    );

    return activitySessionRepository.stop(id, endedAt, durationMinutes);
  }

  async getActiveSession(userId: string) {
    return activitySessionRepository.findActiveSession(userId);
  }

  async getHistory(userId: string) {
    return activitySessionRepository.findHistory(userId);
  }

  async deleteSession(id: string, userId: string) {
    const session = await activitySessionRepository.findById(id, userId);

    if (!session) {
      throw new AppError("Session not found", 404);
    }

    return activitySessionRepository.delete(id);
  }
}
