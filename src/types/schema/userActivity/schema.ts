import { z } from 'zod';

export const userActivitySchema = z.object({
  visitor_ip: z.string(),
  action_name: z.string(),
  page_name: z.string(),
  created_at: z.date(),
});
