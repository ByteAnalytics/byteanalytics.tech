'use client';

import { Text } from '@/components/global/text';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import img1 from '../../../../../public/training/data-science-hero.svg';
import { CustomImage } from '@/components/global/image';
import { BreadCombLayout } from '@/components/ui/custom-ui/bread-comb-layout';

export const DataScienceHero: React.FC = () => {
  return (
    <section>
      <MaxScreenWrapper style="relative flex lg:flex-row flex-col bg-black">
        <div className="z-[500] h-fit absolute top-0 lg:left-[2.5rem] left-4 p-4">
          <BreadCombLayout
            routes={[
              {
                title: 'Home',
                linkto: '/',
              },
              {
                title: 'Training',
                linkto: '/training',
              },
              {
                title: 'Data Science',
              },
            ]}
          />
        </div>
        <div className="w-full lg:w-[65%] polygon-hero lg:justify-start justify-center lg:py-[7rem] lg:ps-[7rem] md:ps-[4rem] py-[4rem] ps-4 md:pe-[4rem] pe-4 bg-lightgrey flex flex-col text-lemongreen text-[77.37px] font-[700] mb-2 relative leading-[85px]">
          <Text as="h1" style="text-black  lg:text-start text-center">
            Data
          </Text>
          <Text
            as="h1"
            style="text-black  lg:text-start text-center  xl:break-normal break-words"
          >
            Science & AI
          </Text>
        </div>
        <div className="absolute top-0 bottom-0 right-0 lg:left-[40%] lg:block hidden">
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
