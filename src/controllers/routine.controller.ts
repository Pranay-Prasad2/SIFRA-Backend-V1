import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { RoutineService } from "../services/routine.service.js";

const routineService = new RoutineService();

export const createRoutine = asyncHandler(
  async (req: Request, res: Response) => {

    console.log(req.user.id);

    const routine = await routineService.createRoutine(req.user.id, req.body);

    res.status(201).json({
      success: true,
      data: routine,
    });
  },
);

export const getRoutines = asyncHandler(async (req: Request, res: Response) => {
  const routines = await routineService.getRoutines(req.user.id);

  res.json({
    success: true,
    data: routines,
  });
});

export const getRoutine = asyncHandler(async (req: Request, res: Response) => {
  const routine = await routineService.getRoutineById(
    req.params.id as string,
    req.user.id,
  );

  res.json({
    success: true,
    data: routine,
  });
});

export const updateRoutine = asyncHandler(
  async (req: Request, res: Response) => {
    const routine = await routineService.updateRoutine(
      req.params.id as string,
      req.user.id,
      req.body,
    );

    res.json({
      success: true,
      data: routine,
    });
  },
);

export const deleteRoutine = asyncHandler(
  async (req: Request, res: Response) => {
    await routineService.deleteRoutine(req.params.id as string, req.user.id);

    res.json({
      success: true,
      message: "Routine deleted successfully",
    });
  },
);

export const toggleRoutine = asyncHandler(
  async (req: Request, res: Response) => {
    const routine = await routineService.toggleRoutine(
      req.params.id as string,
      req.user.id,
    );

    res.json({
      success: true,
      data: routine,
    });
  },
);
