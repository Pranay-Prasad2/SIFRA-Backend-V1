import { Router } from "express";

import {getTask,getTasks,updateTask,updateTaskStatus,deleteTask } from "../controllers/task.controller.js";


const TaskRouter = Router();


TaskRouter.get("/",getTasks);
TaskRouter.get("/:id",getTask);
TaskRouter.patch("/:id",updateTask);
TaskRouter.patch("/:id/status",updateTaskStatus);
TaskRouter.delete("/:id",deleteTask);

export default TaskRouter;
