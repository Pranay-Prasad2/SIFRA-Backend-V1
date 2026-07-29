import { Router } from "express";
import userRoutes from "./user.routes.js";
import CategoryRouter from "./category.routes.js";
// import AIrouter from "./ai.routes.js";
import FocusBlockRouter from "./focusBlocks.routes.js";
import ActivitySessionRouter from "./activitySession.routes.js";
import AnalyticsRouter from "./analytics.routes.js";
const router = Router();

router.use("/users", userRoutes);
router.use("/categories",CategoryRouter);
// router.use("/ai",AIrouter);
router.use("/focus-blocks",FocusBlockRouter);
router.use("/activity",ActivitySessionRouter);
router.use("/analytics",AnalyticsRouter)
export default router;