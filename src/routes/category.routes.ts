import { Router } from "express";
import { CategoryController } from "../controllers/category.controller.js";


const CategoryRouter = Router();
const categoryController = new CategoryController();

CategoryRouter.get("/options",categoryController.getOptions);
CategoryRouter.get("/:userId",categoryController.getUserCategories);

export default CategoryRouter;