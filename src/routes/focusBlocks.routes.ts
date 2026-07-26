import { Router } from "express";
import { FocusBlockController } from "../controllers/focusBlock.controller.js";
import { userContext } from "../middlewares/userContext.middleware.js";

const FocusBlockRouter = Router();

const focusBlockController = new FocusBlockController();

FocusBlockRouter.use(userContext);
FocusBlockRouter.get("/", focusBlockController.getFocusBlocks);

FocusBlockRouter.get("/:id", focusBlockController.getFocusBlock);

FocusBlockRouter.post("/", focusBlockController.createFocusBlock);

FocusBlockRouter.patch("/:id", focusBlockController.updateFocusBlock);

FocusBlockRouter.delete("/:id", focusBlockController.deleteFocusBlock);

export default FocusBlockRouter;