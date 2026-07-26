import { Router } from "express";
import { AnalyticsController } from "../controllers/analytics.controller.js";
import { userContext } from "../middlewares/userContext.middleware.js";

const AnalyticsRouter = Router();

const analyticsController = new AnalyticsController();

AnalyticsRouter.use(userContext);
AnalyticsRouter.get("/dashboard", analyticsController.getDashboard);

export default AnalyticsRouter;
