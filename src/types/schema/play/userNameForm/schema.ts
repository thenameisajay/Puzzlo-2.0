import { z } from 'zod';

export const userNameFormSchema = z.object({
  username: z.string().min(1, {
    message: 'Username is required',
  }),
});

export type UserNameFormType = z.infer<typeof userNameFormSchema>;
