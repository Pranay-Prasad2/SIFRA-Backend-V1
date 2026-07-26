import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { FocusBlockService } from "../services/focusBloack.service.js";

const focusBlockService = new FocusBlockService();

export class FocusBlockController {
  getFocusBlocks = asyncHandler(async (req: Request, res: Response) => {
    const focusBlocks = await focusBlockService.getFocusBlocks(req.user.id);

    res.status(200).json({
      success: true,
      data: focusBlocks,
    });
  });

  getFocusBlock = asyncHandler(async (req: Request, res: Response) => {
    const focusBlock = await focusBlockService.getFocusBlock(
      req.params.id as string,
      req.user.id,
    );

    res.status(200).json({
      success: true,
      data: focusBlock,
    });
  });

  createFocusBlock = asyncHandler(async (req: Request, res: Response) => {
    const focusBlock = await focusBlockService.createFocusBlock(
      req.user.id,
      req.body,
    );

    res.status(201).json({
      success: true,
      data: focusBlock,
    });
  });

  updateFocusBlock = asyncHandler(async (req: Request, res: Response) => {
    const focusBlock = await focusBlockService.updateFocusBlock(
      req.params.id as string,
      req.user.id,
      req.body,
    );

    res.status(200).json({
      success: true,
      data: focusBlock,
    });
  });

  deleteFocusBlock = asyncHandler(async (req: Request, res: Response) => {
    await focusBlockService.deleteFocusBlock(req.params.id as string, req.user.id);

    res.status(200).json({
      success: true,
      message: "Focus block deleted successfully",
    });
  });
}
