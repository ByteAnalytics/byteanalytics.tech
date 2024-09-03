'use client';
import { Text } from '@/components/global/text';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { EnrollBtn } from '../enroll-btn';

export const DataScienceInfo: React.FC = () => {
  return (
    <section className="bg-lightgrey py-[3.5rem] md:px-[8rem] px-4">
      <MaxScreenWrapper>
        <div className="text-[24px] text-white bg-[#1C2135] py-[8.4px] px-[18.33px]  mb-[1.3rem] w-fit">
          You will learn...
        </div>
        <Text
          as="h1"
          style={`mb-[2rem] md:w-[70%] md:text-[40px] text-[28px] font-[700] text-[#1C2135] mb-4 w-full md:leading-[57.6px] leading-[35px]`}
        >
          Sentiment Analysis
        </Text>
        <Text
          as="h2"
          style={`mb-4 md:w-[80%] md:text-[24px] text-[18px] font-[400] text-[#696984] w-full md:leading-[48.6px] leading-[35px]`}
        >
          We analyze customer feedback and social media data to gauge public sentiment, helping businesses understand and respond to customer needs.
        </Text>
        <Text
          as="h1"
          style={`mt-[1.5rem] mb-[2rem] md:w-[70%] md:text-[40px] text-[28px] font-[700] text-[#1C2135] mb-4 w-full md:leading-[57.6px] leading-[35px]`}
        >
         Customer Segmentation Analysis
        </Text>
        <Text
          as="h2"
          style={`md:w-[80%] md:text-[24px] text-[18px] font-[400] text-[#696984] mb-4 w-full md:leading-[48.6px] leading-[35px]`}
        >
          Our segmentation analysis identifies distinct customer groups, enabling targeted marketing strategies and personalized customer experiences
        </Text>
        <Text
          as="h1"
          style={`mb-[2rem] md:w-[70%] md:text-[40px] text-[28px] font-[700] text-[#1C2135] mb-4 w-full md:leading-[57.6px] leading-[35px]`}
        >
          Churn Analysis
        </Text>
        <Text
          as="h2"
          style={`mb-4 md:w-[80%] md:text-[24px] text-[18px] font-[400] text-[#696984] w-full md:leading-[48.6px] leading-[35px]`}
        >
          We help businesses predict and reduce customer churn by analyzing patterns in customer behavior and identifying at-risk segments.
        </Text>
        <Text
          as="h1"
          style={`mb-[2rem] md:w-[70%] md:text-[40px] text-[28px] font-[700] text-[#1C2135] mb-4 w-full md:leading-[57.6px] leading-[35px]`}
        >
          Anomaly Detection
        </Text>
        <Text
          as="h2"
          style={`mb-4 md:w-[80%] md:text-[24px] text-[18px] font-[400] text-[#696984] w-full md:leading-[48.6px] leading-[35px]`}
        >
          Our services detect unusual patterns in data that could indicate fraud, system failures, or other significant issues.
        </Text>
        <Text
          as="h1"
          style={`mb-[2rem] md:w-[70%] md:text-[40px] text-[28px] font-[700] text-[#1C2135] mb-4 w-full md:leading-[57.6px] leading-[35px]`}
        >
          Risk Management Tool
        </Text>
        <Text
          as="h2"
          style={`mb-4 md:w-[80%] md:text-[24px] text-[18px] font-[400] text-[#696984] w-full md:leading-[48.6px] leading-[35px]`}
        >
          A Model to scan social media and news outlets for any potential damaging news or all sorts of sentiment relating to staff, executive or customers of companies.
        </Text>
        <EnrollBtn/>
      </MaxScreenWrapper>
    </section>
  );
};