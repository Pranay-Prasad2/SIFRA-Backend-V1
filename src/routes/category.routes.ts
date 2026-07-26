import { Router } from "express";
import { CategoryController } from "../controllers/category.controller.js";
import { userContext } from "../middlewares/userContext.middleware.js";

const CategoryRouter = Router();

const categoryController = new CategoryController();

CategoryRouter.use(userContext);
CategoryRouter.get("/", categoryController.getCategories);

CategoryRouter.get("/:id", categoryController.getCategory);

CategoryRouter.post("/", categoryController.createCategory);

CategoryRouter.patch("/:id", categoryController.updateCategory);

CategoryRouter.delete("/:id", categoryController.deleteCategory);

export default CategoryRouter;
