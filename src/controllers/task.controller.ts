import { Request, Response } from "express";
import {asyncHandler} from "../middlewares/asyncHandler.js";
import { TaskService } from "../services/task.service.js";

const taskService = new TaskService();

export const createTask = asyncHandler(async (req: Request, res: Response) => {
  const task = await taskService.createTask(req.user.id, req.body);

  res.status(201).json({
    success: true,

    data: task,
  });
});

export const getTasks = asyncHandler(async (req: Request, res: Response) => {
  const tasks = await taskService.getTasks(req.user.id, req.query);

  res.json({
    success: true,

    data: tasks,
  });
});

export const getTask = asyncHandler(async (req: Request, res: Response) => {
  const task = await taskService.getTaskById(req.params.id as string, req.user.id);

  res.json({
    success: true,

    data: task,
  });
});

export const updateTask = asyncHandler(async (req: Request, res: Response) => {
  const task = await taskService.updateTask(
    req.params.id as string,
    req.user.id,
    req.body,
  );

  res.json({
    success: true,

    data: task,
  });
});

export const updateTaskStatus = asyncHandler(
  async (req: Request, res: Response) => {
    const task = await taskService.updateStatus(
      req.params.id as string,
      req.user.id,
      req.body.status,
    );

    res.json({
      success: true,

      data: task,
    });
  },
);

export const deleteTask = asyncHandler(async (req: Request, res: Response) => {
  await taskService.deleteTask(req.params.id as string, req.user.id);

  res.json({
    success: true,

    message: "Task deleted successfully",
  });
});
