import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { ActivitySessionService } from "../services/activitySession.service.js";

const activitySessionService = new ActivitySessionService();

export class ActivitySessionController {
  startSession = asyncHandler(async (req: Request, res: Response) => {
    const session = await activitySessionService.startSession(
      req.user.id,
      req.body.focusBlockId,
    );

    res.status(201).json({
      success: true,

      data: session,
    });
  });

  stopSession = asyncHandler(async (req: Request, res: Response) => {
    const session = await activitySessionService.stopSession(
      req.params.id as string,
      req.user.id,
    );

    res.status(200).json({
      success: true,

      data: session,
    });
  });

  getActiveSession = asyncHandler(async (req: Request, res: Response) => {
    const session = await activitySessionService.getActiveSession(req.user.id);

    res.status(200).json({
      success: true,

      data: session,
    });
  });

  getHistory = asyncHandler(async (req: Request, res: Response) => {
    const sessions = await activitySessionService.getHistory(req.user.id);

    res.status(200).json({
      success: true,

      data: sessions,
    });
  });

  deleteSession = asyncHandler(async (req: Request, res: Response) => {
    await activitySessionService.deleteSession(req.params.id as string, req.user.id);

    res.status(200).json({
      success: true,

      message: "Session deleted successfully",
    });
  });
}
