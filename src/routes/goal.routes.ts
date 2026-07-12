import { Router } from "express";
import {
  createGoal,
  getGoals,
  getGoal,
  updateGoal,
  updateGoalStatus,
  deleteGoal,
} from "../controllers/goal.controller.js";
import { userContext } from "../middlewares/userContext.middleware.js";
const Goalrouter = Router();

Goalrouter.use(userContext);
Goalrouter.post("/", createGoal);
Goalrouter.get("/", getGoals);
Goalrouter.get("/:id", getGoal);
Goalrouter.patch("/:id", updateGoal);
Goalrouter.patch("/:id/status", updateGoalStatus);
Goalrouter.delete("/:id", deleteGoal);

export default Goalrouter;
