import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { GoalService } from "../services/goal.service.js";

const goalService = new GoalService();

export const createGoal = asyncHandler(async (req: Request, res: Response) => {
  const goal = await goalService.createGoal(req.user.id, req.body);

  res.status(201).json({
    success: true,
    data: goal,
  });
});

export const getGoals = asyncHandler(async (req: Request, res: Response) => {
  const goals = await goalService.getGoals(req.user.id, req.query);

  res.json({
    success: true,
    data: goals,
  });
});

export const getGoal = asyncHandler(async (req: Request, res: Response) => {
  const goal = await goalService.getGoalById(
    req.params.id as string,
    req.user.id,
  );

  res.json({  
    success: true,
    data: goal,
  });
});

export const updateGoal = asyncHandler(async (req: Request, res: Response) => {
  const goal = await goalService.updateGoal(
    req.params.id as string,
    req.user.id,
    req.body,
  );

  res.json({
    success: true,
    data: goal,
  });
});

export const updateGoalStatus = asyncHandler(
  async (req: Request, res: Response) => {
    const goal = await goalService.updateStatus(
      req.params.id as string,
      req.user.id,
      req.body.status,
    );

    res.json({
      success: true,
      data: goal,
    });
  },
);

export const deleteGoal = asyncHandler(async (req: Request, res: Response) => {
  await goalService.deleteGoal(req.params.id as string, req.user.id);

  res.json({
    success: true,
    message: "Goal deleted successfully",
  });
});

