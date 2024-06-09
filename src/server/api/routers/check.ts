import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { generateRandomPassword } from "@/utils/helpers/generateRandomPassword";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import type { LeaderboardEntry } from "@prisma/client";

dayjs.extend(utc);

export const checkRouter = createTRPCRouter({
  check: publicProcedure.query(async ({ ctx }) => {
    const currentUtcDate = dayjs().utc().startOf("day").toDate();

    const data = await ctx.db.leaderboard.findFirst({
      where: {
        date: currentUtcDate,
      },
    });

    if (!data) {
      console.log("Creating new data , no previous data found.");
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
    console.log("Data found , returning data.");
    return data;
  }),
});
