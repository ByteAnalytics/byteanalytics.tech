'use client';
import { Text } from '@/components/global/text';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'iconsax-react';

export const DataEngineringInfo: React.FC = () => {
  return (
    <section className="bg-lightgrey py-[3.5rem] md:px-[8rem] px-4">
      <MaxScreenWrapper>
        <div className="text-[24px] text-white bg-[#1C2135] py-[8.4px] px-[18.33px]  mb-[1.3rem] w-fit">
          You will learn...
        </div>
        <Text
          as="h1"
          style={`md:w-[70%] md:text-[40px] text-[28px] font-[700] text-[#1C2135] mb-4 w-full md:leading-[57.6px] leading-[35px]`}
        >
          Data Warehousing
        </Text>
        <hr className="border border-[#7676802B] mb-[1.5rem]" />
        <Text
          as="h2"
          style={`mb-4 md:w-[80%] md:text-[24px] text-[18px] font-[400] text-[#696984] mb-4 w-full md:leading-[48.6px] leading-[35px]`}
        >
          Our data warehousing solutions involve creating a centralized
          repository where data from various sources is stored, structured, and
          made ready for analysis.
        </Text>
        <Text
          as="h1"
          style={`mt-[1.5rem] md:w-[70%] md:text-[40px] text-[28px] font-[700] text-[#1C2135] mb-4 w-full md:leading-[57.6px] leading-[35px]`}
        >
          Data Migration
        </Text>
        <hr className="border border-[#7676802B] mb-[1.5rem]" />
        <Text
          as="h2"
          style={`md:w-[80%] md:text-[24px] text-[18px] font-[400] text-[#696984] mb-4 w-full md:leading-[48.6px] leading-[35px]`}
        >
          We specialize in moving data between systems, ensuring that the
          process is seamless, secure, and maintains data integrity.
        </Text>
        <Text
          as="h1"
          style={`md:w-[70%] md:text-[40px] text-[28px] font-[700] text-[#1C2135] mb-4 w-full md:leading-[57.6px] leading-[35px]`}
        >
          Data Governance
        </Text>
        <hr className="border border-[#7676802B] mb-[1.5rem]" />
        <Text
          as="h2"
          style={`mb-4 md:w-[80%] md:text-[24px] text-[18px] font-[400] text-[#696984] mb-4 w-full md:leading-[48.6px] leading-[35px]`}
        >
          Our data governance services help organizations manage the
          availability, usability, integrity, and security of their data.
        </Text>
        <Text
          as="h1"
          style={`md:w-[70%] md:text-[40px] text-[28px] font-[700] text-[#1C2135] mb-4 w-full md:leading-[57.6px] leading-[35px]`}
        >
          Master Data Management
        </Text>
        <hr className="border border-[#7676802B] mb-[1.5rem]" />
        <Text
          as="h2"
          style={`mb-4 md:w-[80%] md:text-[24px] text-[18px] font-[400] text-[#696984] mb-4 w-full md:leading-[48.6px] leading-[35px]`}
        >
          We ensure that an organization’s critical data is consistent,
          accurate, and controlled, providing a single point of reference for
          critical business information.
        </Text>
        <Text
          as="h1"
          style={`md:w-[70%] md:text-[40px] text-[28px] font-[700] text-[#1C2135] mb-4 w-full md:leading-[57.6px] leading-[35px]`}
        >
          Data Modernization
        </Text>
        <hr className="border border-[#7676802B] mb-[1.5rem]" />
        <Text
          as="h2"
          style={`mb-4 md:w-[80%] md:text-[24px] text-[18px] font-[400] text-[#696984] mb-4 w-full md:leading-[48.6px] leading-[35px]`}
        >
          We assist businesses in updating their data infrastructure to modern,
          cloud-based systems, ensuring they stay competitive in a data-driven
          world.
        </Text>
        <Button className="mt-2 h-[60px] font-[600] flex gap-4 text-[21px] text-white bg-lemongreen rounded px-[36px]">
          Enroll Now <ArrowRight size="18" color="white" />
        </Button>
      </MaxScreenWrapper>
    </section>
  );
};
