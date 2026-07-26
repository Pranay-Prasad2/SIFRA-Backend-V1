import OpenAI from "openai";

import { AIContext } from "../../types/ai.types.js";
import { buildSystemPrompt } from "../prompts/ai.prompt.js";
import { buildUserPrompt } from "../prompts/user.prompts.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class OpenAIProvider {
  async generateSchedule(
    context: AIContext,
    instruction: string,
  ): Promise<string> {
    const response = await client.responses.create({
      model: "gpt-5-mini",

      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text: buildSystemPrompt(),
            },
          ],
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: buildUserPrompt(context, instruction),
            },
          ],
        },
      ],
    });

    return response.output_text;
  }
}