import { Router } from "express";
import userRoutes from "./user.routes.js";
import CategoryRouter from "./category.routes.js";
import TaskRouter from "./tasks.routes.js";
import Goalrouter from "./goal.routes.js";
import Routinerouter from "./routine.routes.js";
const router = Router();

router.use("/users", userRoutes);
router.use("/categories",CategoryRouter);
router.use("/tasks",TaskRouter);
router.use("/goals",Goalrouter);
router.use("/routine",Routinerouter);

export default router;