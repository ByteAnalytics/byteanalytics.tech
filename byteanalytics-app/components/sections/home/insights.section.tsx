'use client';
import { CustomImage } from '@/components/global/image';
import { Text } from '@/components/global/text';
import img from '../../../public/insights/image 1.svg';
import eye from '../../../public/insights/Icon awesome-eye.svg';
import groupimg from '../../../public/insights/Group (1).svg';
import newsletter from '../../../public/insights/newsletter-dev.svg';
import timeline from '../../../public/insights/timeline.svg';
import chart from '../../../public/insights/chart-bar-33.svg';
import { DmSans } from '@/app/layout';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import blubg from '../../../public/insights/Exclude.svg';

export const Insights: React.FC = () => {
  return (
    <section className={`bg-[#F1F5F9]`}>
      <MaxScreenWrapper style="relative grid lg:grid-cols-2 grid-cols-1 lg:gap-[3.5rem] gap-4 py-[6rem] lg:px-[8rem] px-4">
        <CustomImage
          src={blubg}
          style={'absolute bottom-0 md:left-[137px] left-4 md:w-[709px] w-[90%] h-[104px]'}
          imgStyle="object-contain"
        />
        <div>
          <div
            className={`flex items-center mb-4  gap-2 border border-lemongreen bg-[#EAFFE0] w-fit rounded-[23.26px] text-lemongreen text-[18.69px] leading-[27.91px] font-[400] p-[0.6rem] ${DmSans.className}`}
          >
            <CustomImage src={eye} style={'w-[1.5rem] h-[1rem]'} />
            Why Byte Analytics ?
          </div>
          <div className="flex flex-col font-[700] lg:text-[37px] text-[30px] gap-2 mb-4 lg:leading-[36.52px] leading-[30px]">
            <Text as="h2">Get actionable insights from</Text>
            <Text as="h2">
              Big Data in <span className="text-lemongreen ">3 steps</span>
            </Text>
          </div>
          <Text
            as="h3"
            style={`text-[18.61px] font-[400] text-[#8989A2] mb-4 lg:w-[70%] w-full leading-[27.91px]`}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
          <CustomImage
            src={img}
            style={'lg:w-[80%] w-full lg:h-[350.4px] h-[250.4px]'}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <CustomImage
            src={groupimg}
            style={'w-[4rem] h-[4rem] mb-2'}
            imgStyle="object-cover"
          />
          <div className="flex flex-col justify-center gap-4 mt-4">
            {[
              {
                img: chart,
                info: 'Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.',
                heading: 'Valuable business insights',
              },
              {
                img: timeline,
                info: 'Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.',
                heading: 'Valuable business insights',
              },
              {
                img: newsletter,
                info: 'Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.',
                heading: 'Valuable business insights',
              },
            ].map((insights, index) => (
              <div
                className="w-full bg-white z-[500] flex lg:flex-row lg:justify-start justify-center flex-col items-center gap-[1rem] p-4 rounded shadow"
                key={index}
              >
                <CustomImage
                  src={insights.img}
                  style={'w-[283.03px] h-[113.03px]'}
                />
                <div>
                  <Text
                    as="h3"
                    style="font-[600] lg:text-start text-center text-[19.73px] mb-2 leading-[29.6px]"
                  >
                    {insights.heading}
                  </Text>
                  <Text
                    as="h3"
                    style={`lg:text-start text-center text-[18.61px] font-[400] text-[#8989A2] leading-[27.91px]`}
                  >
                    {insights.info}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MaxScreenWrapper>
    </section>
  );
};
