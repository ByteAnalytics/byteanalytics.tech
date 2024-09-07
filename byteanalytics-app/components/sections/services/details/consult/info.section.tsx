'use client';
import { Text } from '@/components/global/text';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { CustomImage } from '@/components/global/image';
import img from '../../../../../public/service/Frame 1561.svg';
import { Cohort } from '../../join-cohort.section';
import { MakeEnquiryBtn } from '../make-enquiry-btn';

export const ConsultInfo: React.FC = () => {
  return (
    <section>
      <div className="bg-[#F1F5F9] py-[3.5rem] md:px-[8rem] px-4">
        <MaxScreenWrapper>
          <CustomImage
            src={img}
            style={'w-full h-[277px]'}
            imgStyle="object-cover rounded-md"
          />
          <Text
            as="h3"
            style={`mt-8 mb-2 md:w-[90%] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 w-full md:leading-[39.6px] leading-[35px]`}
          >
            Discover a simpler way to meet your regulatory obligations. Save
            time and resources, and gain valuable insights that drive informed
            decision-making. Discover a simpler way to meet your regulatory
            obligations. Save time and resources, and gain valuable insights
            that drive informed decision-making. Discover a simpler way to meet
            your regulatory obligations. Save time and resources, and gain
            valuable insights that drive informed decision-making.
          </Text>
          <MakeEnquiryBtn/>
        </MaxScreenWrapper>
      </div>
      <MaxScreenWrapper>
        <Cohort />
      </MaxScreenWrapper>
    </section>
  );
};
