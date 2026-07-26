import { AIContext } from "../../types/ai.types.js";

export function buildUserPrompt(
  context: AIContext,
  instruction: string,
): string {
  return `
User Profile

${JSON.stringify(context, null, 2)}

------------------------------------------------

Planning Request

${instruction}

------------------------------------------------

Design tomorrow's schedule.

Focus on creating a balanced day instead of filling every minute.

If the user doesn't specify exact times,
choose healthy and realistic timings.

Remember:

Schedule TIME BLOCKS,
not individual tasks.
`;
}