'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { ReloadIcon } from '@radix-ui/react-icons';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Text } from '@/components/global/text';
import img1 from '../../../public/courses/Image.svg';
import img2 from '../../../public/courses/image 2.svg';
import { CustomImage } from '@/components/global/image';
import { Button } from '@/components/ui/button';
import { SubscriptionFormSchema } from '@/lib/schema/subscription';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { toast } from 'sonner';
import { FormInputField } from '@/components/ui/custom-ui/form-field';

export const Subscription: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const inputStyle =
    'h-[85px] bg-white px-[24px] py-[16px] text-sm text-[#696984] leading-5 rounded';
  const buttonStyle =
    'w-[141px] h-[58px] gap-[10px] text-lemongreen bg-white py-[0.5rem] px-[1.5rem] rounded font[400] text-sm';
  const form = useForm<z.infer<typeof SubscriptionFormSchema>>({
    resolver: zodResolver(SubscriptionFormSchema),
    defaultValues: {
      email: '',
      country: 'nigeria',
      newsletter: false,
    },
  });

  async function onSubmit(values: z.infer<typeof SubscriptionFormSchema>) {
    const { email, country, newsletter } = values;
    const errorMessage = "We're sorry, but we couldn't complete your request. Please try again.";
    setIsLoading(true);
    try {
      const response = await fetch('/api/post-sheet-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, country, newsletter }),
      });
  
      if (!response.ok) {
        toast.error(errorMessage);
      } else {
        const data = await response.json();
        toast.success("You've successfully subscribed to our newsletter");
        console.log(data);
      }
    } catch (error) {
      console.log('Error:', error);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="bg-[#F1F3F4] py-[5rem] md:px-[10rem] px-4">
      <MaxScreenWrapper>
        <Text
          as="h1"
          style="md:text-[40px] text-[30px] font-[700] mb-[2.5rem] text-center"
        >
          Sign up for the Byte Analytics space newsletter
        </Text>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
              <FormInputField
                inputStyle={inputStyle}
                control={form.control}
                name="email"
                inputCategory="input"
                inputType="email"
                placeholder="Enter your email"
              />
              <FormInputField
                inputStyle={inputStyle}
                control={form.control}
                name={'country'}
                inputCategory="select"
                placeholder="Select Type"
                selectList={['nigeria']}
              />
            </div>
            <FormField
              control={form.control}
              name="newsletter"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-2 items-start mb-8">
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <div className="flex flex-col">
                        <Text
                          style={`text-[16px] font-[400] text-[#696984] leading-6 `}
                        >
                          Also sign me up for Byte analytics emails with news,
                          product updates, event information, special offers,
                          and more.
                        </Text>
                        <Text
                          style={`text-[16px] font-[400] text-[#696984] leading-6 `}
                        >
                          (Optional and you can unsubscribe at a later time).
                        </Text>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Text
              style={`text-[16px] font-[400] text-[grey] text-[#696984] leading-5`}
            >
              I understand my personal data will be processed in accordance with
              Byte Analytic’s 
              <span>
                <Link
                  href="/"
                  className="text-[16px] font-[400] text-lemongreen"
                >
                  Privacy Policy.
                </Link>
              </span>
            </Text>

            <div
              style={{ marginTop: '3rem' }}
              className="flex justify-end items-end bg-darkblue text-white rounded-md mt-12 w-fit ms-auto"
            >
              {isLoading ? (
                <Button
                  disabled
                  className="w-[141px] h-[58px] gap-[10px] text-lemongreen bg-white py-[0.5rem] px-[1.5rem] rounded font[400] text-sm "
                >
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin text-lemongreen" />
                </Button>
              ) : (
                <Button type="submit" className={buttonStyle}>
                  Sign Up
                </Button>
              )}
            </div>
          </form>
        </Form>
      </MaxScreenWrapper>
    </section>
  );
};
