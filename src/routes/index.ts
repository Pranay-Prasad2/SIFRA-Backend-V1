import { Router } from "express";
import userRoutes from "./user.routes.js";
import CategoryRouter from "./category.routes.js";
import TaskRouter from "./tasks.routes.js";
const router = Router();

router.use("/users", userRoutes);
router.use("/categories",CategoryRouter);
router.use("/tasks",TaskRouter);

export default router;