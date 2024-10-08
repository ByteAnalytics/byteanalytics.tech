'use client';

import { Text } from '@/components/global/text';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import img1 from '../../../public/about-us/Rectangle 392 (1).svg';
import { CustomImage } from '@/components/global/image';

export const AboutUsHero: React.FC = () => {
  return (
    <section>
      <MaxScreenWrapper style="relative flex lg:flex-row flex-col relative bg-black">
        <div className="w-full lg:w-[50%] polygon-hero lg:justify-start justify-center py-[7rem] lg:ps-[7rem] md:ps-[4rem] py-[4rem] ps-4 lg:pe-[8rem] md:pe-[4rem] pe-4 bg-lightgrey flex flex-col text-lemongreen md:text-[77.37px] text-[57px] font-[500] md:font-[700] mb-2 relative leading-[85px]">
          <Text as="h1" style="text-black  lg:text-start text-center">
            About Us
          </Text>
        </div>
        <div className="absolute top-0 bottom-0 right-0 lg:left-[30%] lg:block hidden">
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
