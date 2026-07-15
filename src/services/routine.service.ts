import { RoutineRepository } from "../repositories/routine.repository.js";

const routineRepository = new RoutineRepository();

export class RoutineService {
  async createRoutine(userId: string, data: any) {
    return routineRepository.create({
      ...data,
      userId,
    });
  }

  async getRoutines(userId: string) {
    return routineRepository.findAll(userId);
  }

  async getRoutineById(id: string, userId: string) {
    const routine = await routineRepository.findById(id, userId);

    if (!routine) {
      throw new Error("Routine not found");
    }

    return routine;
  }

  async updateRoutine(id: string, userId: string, data: any) {
    const routine = await this.getRoutineById(id, userId);

    return routineRepository.update(routine.id, userId, data);
  }

  async deleteRoutine(id: string, userId: string) {
    await this.getRoutineById(id, userId);

    return routineRepository.delete(id);
  }

  async toggleRoutine(id: string, userId: string) {
    const routine = await this.getRoutineById(id, userId);

    return routineRepository.toggle(id, !routine.isActive);
  }
}
