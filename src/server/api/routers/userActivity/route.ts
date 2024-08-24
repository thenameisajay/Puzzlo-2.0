import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { userActivitySchema } from '@/types/schema/userActivity/schema';

export const userActivityRouter = createTRPCRouter({
  create: publicProcedure
    .input(userActivitySchema)
    .mutation(async ({ ctx, input }) => {
      console.log('Creating new user activity');

      try {
        await ctx.db.userActivity.create({
          data: {
            visitor_ip: input.visitor_ip,
            action_name: input.action_name,
            page_name: input.page_name,
            created_at: input.created_at,
          },
        });
        console.log('User activity created');

        return 'User activity created';
      } catch (error) {
        console.error('Error saving user activity:', error);
        throw new Error('Failed to create user activity');
      }
    }),
});
