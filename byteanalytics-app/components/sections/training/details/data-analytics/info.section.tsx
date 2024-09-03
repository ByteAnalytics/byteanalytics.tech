'use client';
import { Text } from '@/components/global/text';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { EnrollBtn } from '../enroll-btn';

export const DataAnalyticstInfo: React.FC = () => {
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
          Business Intelligence reporting and Automation
        </Text>
        <Text
          as="h2"
          style={`mb-[2rem] md:w-[80%] md:text-[24px] text-[18px] font-[400] text-[#696984] mb-4 w-full md:leading-[48.6px] leading-[35px]`}
        >
          Automated reporting to emails, slack, power bI dashboards etc. This
          service involves transforming raw data into meaningful insights that
          drive decision-making. We automate the reporting process using tools
          like Power BI and SQL, ensuring that businesses receive timely,
          accurate, and actionable insights.
        </Text>
        <hr className="border border-[#7676802B] mb-[1.5rem]" />
        <Text
          as="h1"
          style={`md:w-[70%] md:text-[40px] text-[28px] font-[700] text-[#1C2135] mb-4 w-full md:leading-[57.6px] leading-[35px]`}
        >
          Business insights for banking and finance, manufacturing, healthcare,
          HR.
        </Text>
        <Text
          as="h2"
          style={`md:w-[80%] md:text-[24px] text-[18px] font-[400] text-[#696984] mb-4 w-full md:leading-[48.6px] leading-[35px]`}
        >
          Automated reporting to emails, slack, power bI dashboards etc. This
          service involves transforming raw data into meaningful insights that
          drive decision-making. We automate the reporting process using tools
          like Power BI and SQL, ensuring that businesses receive timely,
          accurate, and actionable insights.
        </Text>
        <EnrollBtn/>
      </MaxScreenWrapper>
    </section>
  );
};
