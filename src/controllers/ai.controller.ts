import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { AIService } from "../services/ai.service.js";

const aiService = new AIService();

export const generateDay = asyncHandler(
  async (req: Request, res: Response) => {
    const { instruction } = req.body;

    if (!instruction || instruction.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Instruction is required.",
      });
    }

    const schedule = await aiService.generateDay(
      req.user.id,
      instruction,
    );

    res.status(200).json({
      success: true,
      data: schedule,
    });
  },
);