import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { AnalyticsService } from "../services/analytics.service.js";

const analyticsService = new AnalyticsService();

export class AnalyticsController {
  getDashboard = asyncHandler(async (req: Request, res: Response) => {
    const dashboard = await analyticsService.getDashboard(req.user.id);

    res.status(200).json({
      success: true,

      data: dashboard,
    });
  });
}
