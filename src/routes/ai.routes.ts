import { Router } from "express";
import { generateDay } from "../controllers/ai.controller.js";
import { userContext } from "../middlewares/userContext.middleware.js";

const AIrouter = Router();

AIrouter.use(userContext);
AIrouter.post("/generate-day", generateDay);

export default AIrouter;
