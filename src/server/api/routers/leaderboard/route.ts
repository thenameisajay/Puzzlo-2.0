import { type LeaderboardEntry } from '@prisma/client';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { generateRandomPassword } from '@/actions/game/generateRandomPassword/actions';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { leaderboardEntrySchema } from '@/types/schema/play/leaderboardEntry/schema';

dayjs.extend(utc);

export const leaderboardRouter = createTRPCRouter({
  ensureDailyLeaderboard: publicProcedure.query(async ({ ctx }) => {
    const currentUtcDate = dayjs().utc().startOf('day').toDate();

    try {
      const data = await ctx.db.leaderboard.findFirst({
        where: {
          date: currentUtcDate,
        },
      });

      if (!data) {
        console.log('Creating new data, no previous data found.');
        const newData = await ctx.db.leaderboard.create({
          data: {
            date: currentUtcDate,
            password: await generateRandomPassword(),
            leaderboard: {
              create: [] as LeaderboardEntry[],
            },
          },
        });
        return newData;
      }

      console.log('Data found, returning existing data.');
      return data;
    } catch (error) {
      console.error('Error fetching or creating leaderboard entry:', error);
      throw new Error('Unable to ensure daily leaderboard');
    }
  }),
  createLeaderboardEntry: publicProcedure
    .input(leaderboardEntrySchema)
    .mutation(async ({ ctx, input }) => {
      console.log('Creating new leaderboard entry');

      try {
        await ctx.db.leaderboardEntry.create({
          data: {
            username: input.username,
            numberOfTries: input.numberOfTries,
            score: input.score,
            timeTaken: input.numberOfTries,
            leaderboardId: input.leaderboardId,
          },
        });
        console.log('Leaderboard entry created');
        return 'Leaderboard entry created';
      } catch (error) {
        console.error('Error saving leaderboard entry:', error);
        throw new Error('Failed to create leaderboard entry');
      }
    }),
  getLeaderboard: publicProcedure.query(async ({ ctx }) => {
    const currentUtcDate = dayjs().utc().startOf('day').toDate();
    try {
      const data = await ctx.db.leaderboard.findFirst({
        where: {
          date: currentUtcDate,
        },
        include: {
          leaderboard: {
            orderBy: [{ score: 'desc' }, { timeTaken: 'asc' }],
            take: 10, // Limited to only 10 entries
          },
        },
      });

      if (!data) {
        throw new Error('No leaderboard data found');
      }

      return data;
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      throw new Error('Failed to fetch leaderboard');
    }
  }),
});
