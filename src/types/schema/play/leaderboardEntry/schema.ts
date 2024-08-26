import { z } from 'zod';

export const leaderboardEntrySchema = z.object({
  username: z.string(),
  score: z.number(),
  numberOfTries: z.number(),
  leaderboardId: z.number(),
  timeTaken: z.number(),
});

export type LeaderboardEntryType = z.infer<typeof leaderboardEntrySchema>;
