import { Request, Response } from "express";
import { UserService } from "../services/user.service.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";

const service = new UserService();

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await service.create(req.body);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: user,
  });
});

export const getUsers = asyncHandler(async (_req: Request, res: Response) => {
  const users = await service.getAll();

  res.json({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
});

export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await service.getById(req.params.id as string)

  res.json({
    success: true,
    message: "User fetched successfully",
    data: user,
  });
});

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await service.update(req.params.id as string, req.body);

  res.json({
    success: true,
    message: "User updated successfully",
    data: user,
  });
});

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  await service.delete(req.params.id as string);

  res.json({
    success: true,
    message: "User deleted successfully",
  });
});