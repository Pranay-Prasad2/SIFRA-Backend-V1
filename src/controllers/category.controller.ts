import { Request, Response } from "express";
import { categoryService } from "../services/category.service.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";

// const categoryService = new CategoryService();

export class CategoryController {
  getCategories = asyncHandler(async (req: Request, res: Response) => {
    const categories = await categoryService.getCategories(req.user!.id);

    res.status(200).json({
      success: true,
      data: categories,
    });
  });

  getCategory = asyncHandler(async (req: Request, res: Response) => {
    const category = await categoryService.getCategory(
      req.params.id as string,
      req.user!.id,
    );

    res.status(200).json({
      success: true,
      data: category,
    });
  });

  createCategory = asyncHandler(async (req: Request, res: Response) => {
    const category = await categoryService.createCategory(
      req.user!.id,
      req.body,
    );

    res.status(201).json({
      success: true,
      data: category,
    });
  });

  updateCategory = asyncHandler(async (req: Request, res: Response) => {
    const category = await categoryService.updateCategory(
      req.params.id as string,
      req.user!.id,
      req.body,
    );

    res.status(200).json({
      success: true,
      data: category,
    });
  });

  deleteCategory = asyncHandler(async (req: Request, res: Response) => {
    await categoryService.deleteCategory(req.params.id as string, req.user!.id);

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  });
}
