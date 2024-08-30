'use client';
import axios, { AxiosError } from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { ContactUsFormSchema } from '../../../lib/schema/contact-us';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof ContactUsFormSchema>>({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof ContactUsFormSchema>) {
    const { email, firstname, lastname, phone, message } = values;
    setIsLoading(true);
    const data = {
      service_id: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      template_id: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      user_id: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
      template_params: {
        email: email,
        phone: phone,
        message: message,
        firstname: firstname,
        lastname: lastname,
        to_name: 'Byte Analytics',
      },
    };
    const sendData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.post(
          'https://api.emailjs.com/api/v1.0/email/send',
          data
        );
        toast.success('Message Successfully Sent!');
      } catch (error) {
        console.log(error);
        toast.error('An error occured While attempting to send message.');
      } finally {
        setIsLoading(false);
      }
    };
    sendData();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[42.67px] gap-[30px] md:mb-[42.67px] mb-[30px]">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    required
                    className="rounded-none border-b-2 border-[#8D8D8D] bg-[#E6F0FC]"
                    type="text"
                    placeholder="John"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input
                    required
                    className="rounded-none border-b-2 border-[#8D8D8D] bg-[#E6F0FC]"
                    type="text"
                    placeholder="Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    required
                    className="rounded-none border-b-2 border-[#8D8D8D] bg-[#E6F0FC]"
                    type="email"
                    placeholder="sample@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input
                    required
                    className="rounded-none border-b-2 border-[#8D8D8D] bg-[#E6F0FC]"
                    type="tel"
                    placeholder="+2349089786756"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Input
                    required
                    className="rounded-none border-b-2 border-[#8D8D8D] bg-[#E6F0FC] md:my-[42.67px] my-[30px]"
                    type="text"
                    placeholder="write your message"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <div
          className="flex justify-start items-end bg-darkblue text-white rounded-md mt-8"
          style={{ marginTop: '1.5rem' }}
        >
          {isLoading ? (
            <Button
              disabled
              className="text-white bg-lemongreen px-[52.51px] py-[16.41px] text-[17.5px] h-[46px]"
            >
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin text-white" />
              Sending...
            </Button>
          ) : (
            <Button
              type="submit"
              className="text-white bg-lemongreen px-[52.51px] py-[16.41px] text-[17.5px] h-[46px] border"
            >
              Send Message
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};
