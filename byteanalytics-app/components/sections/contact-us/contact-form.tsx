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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ContactUsFormSchema } from '../../../lib/schema/contact-us';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';
import { FormInputField } from '@/components/ui/custom-ui/form-field';

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputStyle = 'rounded-none border-b-2 border-[#8D8D8D] bg-[#E6F0FC]';
  const messageInputStyle =
    'rounded-none border-b-2 border-[#8D8D8D] bg-[#E6F0FC] md:my-[42.67px] my-[30px]';
  const formGridStyle =
    'grid md:grid-cols-2 grid-cols-1 md:gap-[42.67px] gap-[30px] md:mb-[42.67px] mb-[30px]';
  const enquiryTypeList = [
    'General',
    'Training',
    'Technical',
    'Collaboration',
    'Feedbacks',
    'Payments',
    'Others',
  ];
  const form = useForm<z.infer<typeof ContactUsFormSchema>>({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
      message: '',
      inquirytype: '',
      organization: '',
    },
  });

  async function onSubmit(values: z.infer<typeof ContactUsFormSchema>) {
    const {
      email,
      firstname,
      lastname,
      phone,
      message,
      inquirytype,
      organization,
    } = values;
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
        inquirytype: `${inquirytype} Inquiry`,
        organization: organization,
        to_name: 'Byte Analytics',
      },
    };
    const sendData = async () => {
      const apiUrl = 'https://api.emailjs.com/api/v1.0/email/send';
      const successMessage =
        'Thank you for reaching out! Your message has been successfully sumbitted.';
      const ErrorMessage = `We're sorry, but your message could'nt be sent. Please refresh page and try again.`;
      try {
        setIsLoading(true);
        await axios.post(apiUrl, data);
        toast.success(successMessage);
      } catch (error) {
        console.log(error);
        toast.error(ErrorMessage);
      } finally {
        setIsLoading(false);
      }
    };
    sendData();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={formGridStyle}>
          <FormInputField
            control={form.control}
            name="firstname"
            inputStyle={inputStyle}
            label={'First Name'}
            inputCategory="input"
            inputType="text"
            placeholder="John"
          />
          <FormInputField
            inputStyle={inputStyle}
            control={form.control}
            name="lastname"
            label={'Last Name'}
            inputCategory="input"
            inputType="text"
            placeholder="Doe"
          />
          <FormInputField
            inputStyle={inputStyle}
            control={form.control}
            name="email"
            label={'Email'}
            inputCategory="input"
            inputType="email"
            placeholder="johndoe@gmail.com"
          />
          <FormInputField
            inputStyle={inputStyle}
            control={form.control}
            name="phone"
            label={'Phone Number'}
            inputCategory="input"
            inputType="tel"
            placeholder="+2349089786756"
          />
          <FormInputField
            inputStyle={inputStyle}
            control={form.control}
            name="organization"
            label={'Organization'}
            inputCategory="input"
            inputType="text"
            placeholder="John's Company"
          />
          <FormInputField
            inputStyle={inputStyle}
            control={form.control}
            name={'inquirytype'}
            label={'Enquiry Type'}
            inputCategory="select"
            placeholder="Please Select..."
            selectList={enquiryTypeList}
          />
        </div>
        <FormInputField
          control={form.control}
          name="message"
          label={'Message'}
          inputCategory="input"
          inputType="text"
          inputStyle={messageInputStyle}
          placeholder="Write your message"
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
