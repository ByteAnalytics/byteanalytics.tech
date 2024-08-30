'use client';

import { Text } from '@/components/global/text';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { CustomImage } from '@/components/global/image';
import img from '../../../public/contact-us/Group 1000001749.svg';
import img2 from '../../../public/contact-us/Group 1000001750.svg';
import img3 from '../../../public/contact-us/Group 1000001751.svg';
import { ContactForm } from './contact-form';

export const ContactUs = () => {
  return (
    <section>
      <MaxScreenWrapper style="relative flex lg:flex-row flex-col bg-black">
        <div className="w-full lg:w-[45%] md:py-[4rem] lg:px-[3rem] md:px-[2rem] px-4 py-12 bg-black">
          <Text
            as="h1"
            style="text-white md:text-[24px] text-[20px] font-[500] mb-4"
          >
            {`Will you be in Lagos any time soon? Stop by the office! We'd love to
            meet.`}
          </Text>
          <div className="flex flex-col divide-[#374151] divide-y-2">
            <div className="grid lg:grid-cols-2 grid-cols-1 py-4">
              <div>
                <Text
                  as="h2"
                  style="text-white md:text-[18px] text-[16px] font-[400]"
                >
                  Address
                </Text>
              </div>
              <div>
                <Text as="h3" style="text-white text-[16px] font-[900]">
                  1702 Olympic Boulevard Santa Monica, CA 90404
                </Text>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 py-4">
              <div>
                <Text
                  as="h2"
                  style="text-white md:text-[18px] text-[16px] font-[400]"
                >
                  Phone Number
                </Text>
              </div>
              <div>
                <Text as="h3" style="text-white text-[16px] font-[900]">
                  (480) 555-0103
                </Text>
                <Text as="h3" style="text-white text-[16px] font-[900]">
                  (219) 555-0114
                </Text>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 py-4">
              <div>
                <Text
                  as="h2"
                  style="text-white md:text-[18px] text-[16px] font-[400]"
                >
                  Email Address
                </Text>
              </div>
              <div>
                <Text as="h3" style="text-white text-[16px] font-[900]">
                  help.eduguard@gmail.com
                </Text>
                <Text as="h3" style="text-white text-[16px] font-[900]">
                  career.eduguard@gamil.com
                </Text>
              </div>
            </div>
          </div>
          <ul className="flex gap-4 items-center md:ms-auto ms-0">
            <li>
              <CustomImage src={img} style={'w-[17px] h-[15px]'} />
            </li>
            <li>
              <CustomImage src={img2} style={'w-[17px] h-[15px]'} />
            </li>
            <li>
              <CustomImage src={img3} style={'w-[17px] h-[15px]'} />
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-[55%] md:py-[4rem] lg:px-[3rem] md:px-[2rem] px-4 py-12 bg-[#E6F0FC] mb-[15px]">
          <ContactForm />
        </div>
      </MaxScreenWrapper>
    </section>
  );
};
