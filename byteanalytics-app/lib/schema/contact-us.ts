import * as z from 'zod';

export const ContactUsFormSchema = z.object({
  inquirytype: z.string({
    required_error: 'Inquiry field is required.',
  }),
  organization: z.string({
    required_error: 'Organization field is required.',
  }),
  email: z.string({
    required_error: 'email field is required.',
  }),
  firstname: z.string({
    required_error: 'First Name field is required.',
  }),
  lastname: z.string({
    required_error: 'First Name field is required.',
  }),
  phone: z.string({
    required_error: 'Phone Number field is required.',
  }),
  message: z.string({
    required_error: 'Message field is required.',
  }),
});
