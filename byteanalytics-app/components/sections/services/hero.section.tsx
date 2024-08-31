'use client';

import { CustomImage } from '@/components/global/image';
import { Text } from '@/components/global/text';
import img1 from '../../../public/service-hero/Group 11.svg';
import img2 from '../../../public/service-hero/Group 21.svg';
import img3 from '../../../public/service-hero/Rectangle 392.svg';
import { DmSans } from '@/app/layout';
import { MaxScreenWrapper } from '@/components/global/max-screen';

export const ServiceHero: React.FC = () => {
  return (
    <section>
      <MaxScreenWrapper style="relative flex lg:flex-row flex-col relative lg:bg-none bg-black">
          <div className="w-full lg:w-[50%] polygon-hero lg:justify-start justify-center lg:py-[7rem] lg:ps-[7rem] md:ps-[4rem] py-[4rem] ps-4 lg:pe-[8rem] md:pe-[4rem] pe-4 bg-lightgrey flex flex-col text-lemongreen text-[77.37px] font-[700] mb-2 relative leading-[85px]">
            <Text
              as="h1"
              style="text-black  lg:text-start text-center"
            >
              Our
            </Text>
            <Text
              as="h1"
              style="text-black lg:text-start text-center break-words"
            >
              Services
            </Text>
        </div>
        <div className="lg:px-0 px-4 lg:py-0 py-[6rem] md:px-[8rem] px-4 lg:w-[50%] w-full flex items-center lg:flex-row flex-col gap-12 justify-center">
          <CustomImage
            src={img2}
            style={'lg:w-[301px] w-[201px] lg:h-[318px] h-[218px]'}
          />
          <div className="flex flex-col lg:items-start items-center lg:justify-start justify-center">
            <div
              className={`flex items-center mb-4  gap-2 bg-[#374151] border border-[#6997FF] w-fit rounded-2xl text-[#6997FF] text-xs font-[500] p-[0.4rem]`}
            >
              <CustomImage src={img1} style={'w-[1rem] h-[0.9rem]'} />
              Our Offers
            </div>
            <Text as="h2" style="font-[600] lg:text-[23.4px] mb-2 text-white lg:text-start text-center md:text-[40px] text-[30px]">
              Consultation has never being easy
            </Text>
            <Text
              as="h3"
              style={`lg:text-[14px] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 md:w-[70%] w-full lg:leading-[17.55px] md:leading-[39.6px] leading-[35px] lg:text-start text-center`}
            >
              A centralized platform that integrates zillions of data sources
              using Big Data ELT (Extract, Load & Transform) that leaves no data
              behind
            </Text>
          </div>
        </div>
      </MaxScreenWrapper>
    </section>
  );
};
