import * as z from 'zod';

export const SubscriptionFormSchema = z.object({
  email: z.string({
    required_error: 'email field is required.',
  }),
  country: z.string({
    required_error: 'Country field is required.',
  }),
  newsletter: z.boolean(),
});