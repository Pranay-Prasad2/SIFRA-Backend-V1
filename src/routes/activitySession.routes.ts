import { Router } from "express";
import { ActivitySessionController } from "../controllers/activitySession.controller.js";
import { userContext } from "../middlewares/userContext.middleware.js";

const ActivitySessionRouter = Router();

const activitySessionController = new ActivitySessionController();

ActivitySessionRouter.use(userContext);
ActivitySessionRouter.post("/start", activitySessionController.startSession);

ActivitySessionRouter.post("/:id/stop", activitySessionController.stopSession);

ActivitySessionRouter.get("/active",activitySessionController.getActiveSession);

ActivitySessionRouter.get("/history", activitySessionController.getHistory);

ActivitySessionRouter.delete("/:id", activitySessionController.deleteSession);

export default ActivitySessionRouter;
