import { Request, Response, NextFunction } from "express";
import { CategoryService } from "../services/category.service.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
const categoryService = new CategoryService();

export class CategoryController {
  getOptions = asyncHandler(async (req:Request, res:Response) => {
    const categories = await categoryService.getDefaultCategories();

    res.status(200).json({
      success: true,
      data: categories,
    });
  });

  getUserCategories = asyncHandler(async (req:Request, res:Response) => {
    const { userId } = req.params;

    const categories = await categoryService.getUserCategories(userId as string);

    res.status(200).json({
      success: true,
      data: categories,
    });
  });
}
