'use client';
import { CustomImage } from '@/components/global/image';
import { Text } from '@/components/global/text';
import img from '../../../public/Rectangle 384.svg';
import { DmSans } from '@/app/layout';
import { MaxScreenWrapper } from '@/components/global/max-screen';

export const Data: React.FC = () => {
  return (
    <section className="bg-black">
      <MaxScreenWrapper style="flex md:flex-row flex-col">
        <div className="md:px-[6rem] py-[3rem] px-4 md:w-[55%] w-full">
          <Text as="h1" style="md:text-[36.15px] text-[30px] font-[700] mb-4 text-white">
            Use Your Data To Drive Results
          </Text>
          <Text
            as="h2"
            style={`md:text-[27.81px] text-[20px] font-[400] text-[#C1C1C1] mb-4 md:leading-[40.71px] leading-[34.71px] ${DmSans.className}`}
          >
            Discover a simpler way to meet your regulatory obligations. Save
            time and resources, and gain valuable insights that drive informed
            decision-making.
          </Text>
        </div>
        <div className="md:w-[45%] w-full border">
          <CustomImage
            src={img}
            style={'w-full md:h-full h-[15rem]'}
            imgStyle="object-cover"
          />
        </div>
      </MaxScreenWrapper>
    </section>
  );
};
