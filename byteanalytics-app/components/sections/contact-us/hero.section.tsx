'use client';

import { Text } from '@/components/global/text';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import img1 from '../../../public/contact-us/Rectangle 392.svg';
import { CustomImage } from '@/components/global/image';

export const ContactUsHero: React.FC = () => {
  return (
    <section>
      <MaxScreenWrapper style="relative flex lg:flex-row flex-col relative bg-black">
        <div className="w-full lg:w-[67%] polygon-hero lg:justify-start justify-center py-[7rem] lg:ps-[7rem] md:ps-[4rem] py-[4rem] ps-4 lg:pe-[16rem] md:pe-[4rem] pe-4 bg-[#E6F0FC] flex flex-col text-lemongreen md:text-[77.37px] text-[57px] font-[500] md:font-[700] mb-2 relative leading-[85px]">
          <Text as="h1" style="text-black  lg:text-start text-center">
           Contact
          </Text>
          <Text as="h1" style="text-black  lg:text-start text-center  xl:break-normal break-words">
            Information
          </Text>
        </div>
        <div className="absolute top-0 bottom-0 right-0 lg:left-[43%] lg:block hidden">
          <CustomImage
            src={img1}
            style={'w-full h-full'}
            imgStyle="object-cover z-[100]"
          />
        </div>
      </MaxScreenWrapper>
    </section>
  );
};