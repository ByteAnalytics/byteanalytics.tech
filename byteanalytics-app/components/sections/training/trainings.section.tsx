'use client';
import { Text } from '@/components/global/text';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { CustomImage } from '@/components/global/image';
import { ArrowRight } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import img from '../../../public/training/Rectangle 395.svg';
import img2 from '../../../public/training/Rectangle 395 (1).svg';
import img3 from '../../../public/training/Rectangle 395 (2).svg';
import img4 from '../../../public/training/Image.svg';
import img5 from '../../../public/training/Image (1).svg';
import img6 from '../../../public/training/Image (2).svg';
import img7 from '../../../public/training/Image (3).svg';
import { TrainingCard } from './training-card';
import { useRouter } from 'next/navigation';
export const AllTrainings: React.FC = () => {
  const router = useRouter();
  return (
    <section>
      <div className="bg-[#F1F5F9] py-[6rem] md:px-[8rem] px-4">
        <MaxScreenWrapper style="flex flex-col md:gap-[140px] gap-[80px] ">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4">
            <div>
              <Text
                as="h1"
                style="md:text-[40px] text-[30px] font-[700] text-black"
              >
                Data Analytics
              </Text>
              <Text
                as="h2"
                style={`md:w-[90%] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 w-full md:leading-[39.6px] leading-[35px]`}
              >
                Business Intelligence reporting and Automation,Business insights
                for banking and finance, manufacturing, healthcare, HR.
              </Text>
              <Button
                onClick={() => router.push('/training/data-analytics')}
                className="h-[60px] font-[600] flex gap-4 text-[21px] text-black bg-[#F1F5F9] border border-black rounded"
              >
                Take Course <ArrowRight size="18" color="black" />
              </Button>
            </div>
            <CustomImage
              src={img}
              style={'md:order-none order-first w-full md:h-full h-[10rem]'}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4">
            <CustomImage src={img2} style={'w-full md:h-full h-[10rem] '} />
            <div>
              <Text
                as="h1"
                style="md:text-[40px] text-[30px] font-[700] mb-4 text-black"
              >
                Data Engineering & Design
              </Text>
              <Text
                as="h2"
                style={`md:w-[90%] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 w-full md:leading-[39.6px] leading-[35px]`}
              >
                Understand the engineering behind Data warehousing, Data
                migration, Data governance, Master data management, Data
                modernization.
              </Text>
              <Button
                onClick={() => router.push('/training/data-engineering')}
                className=" h-[60px] font-[600] flex gap-4 text-[21px] text-black bg-[#F1F5F9] border border-black rounded"
              >
                Take Course <ArrowRight size="18" color="black" />
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4">
            <div>
              <Text
                as="h1"
                style="md:text-[40px] text-[30px] font-[700] mb-4 text-black"
              >
                Data Science & AI
              </Text>
              <Text
                as="h2"
                style={`md:w-[90%] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 w-full md:leading-[39.6px] leading-[35px]`}
              >
                Sentiment Analysis, Customer segmentation analysis, Anomaly
                detection, Churn Analysis, Risk management tool.
              </Text>
              <Button
                onClick={() => router.push('/training/data-science')}
                className=" h-[60px] font-[600] flex gap-4 text-[21px] text-black bg-[#F1F5F9] border border-black rounded"
              >
                Take Course <ArrowRight size="18" color="black" />
              </Button>
            </div>
            <CustomImage
              src={img3}
              style={'w-full md:h-full h-[10rem] md:order-none order-first'}
            />
          </div>
        </MaxScreenWrapper>
      </div>
      <div className="bg-lightgrey py-[6rem] md:px-[9rem] px-4">
        <MaxScreenWrapper>
          <Text
            as="h1"
            style="md:text-[46px] text-[30px] font-[700] text-black text-center mb-8"
          >
            Join Training As
          </Text>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 auto-rows-fr">
            {[
              {
                img: img4,
                title: 'Individual',
                info: 'This service targets individuals in the diaspora, offering flexible training programs that cater to their unique needs and time zones.',
              },
              {
                img: img5,
                title: 'Cohort',
                info: '3 months training program covering Excel, SQL, Power BI. We offer group training sessions where participants can learn data analytics and engineering skills in a collaborative environment.',
              },
              {
                img: img6,
                title: 'Management Training',
                info: 'Our management training focuses on equipping leaders with the data skills needed to make informed strategic decisions.',
              },
              {
                img: img7,
                title: 'Corporate Training',
                info: 'We provide tailored training programs for companies, designed to meet the specific needs of their teams.',
              },
            ].map((course, index) => (
              <TrainingCard key={index} {...course} />
            ))}
          </div>
        </MaxScreenWrapper>
      </div>
    </section>
  );
};
