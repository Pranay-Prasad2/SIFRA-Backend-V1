import { Router } from "express";

import {
  createRoutine,
  getRoutines,
  getRoutine,
  updateRoutine,
  deleteRoutine,
  toggleRoutine,
} from "../controllers/routine.controller.js";
import { userContext } from "../middlewares/userContext.middleware.js";

const Routinerouter = Router();

Routinerouter.use(userContext);

Routinerouter.post("/", createRoutine);

Routinerouter.get("/", getRoutines);

Routinerouter.get("/:id", getRoutine);

Routinerouter.put("/:id", updateRoutine);

Routinerouter.delete("/:id", deleteRoutine);

Routinerouter.patch("/:id/toggle", toggleRoutine);

export default Routinerouter;
