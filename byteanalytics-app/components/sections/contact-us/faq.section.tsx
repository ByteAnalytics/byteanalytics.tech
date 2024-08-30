'use client';
import { Text } from '@/components/global/text';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { FaqBody } from './faq-body';

export const FaqSection: React.FC = () => {
  return (
    <section>
      <div className="bg-[#E6F0FC] py-[6rem] md:px-[8rem] px-4">
        <MaxScreenWrapper>
          <Text
            as="h1"
            style="text-[36px] leading-[44px] font-[700] mb-2 text-center"
          >
            Frequently Asked Questions
          </Text>
          <Text
            as="h2"
            style="text-[16px] font-[400] mb-12 text-[#8C8C8C] text-center leading-[24px] "
          >
            Still you have any questions? Contact our Team via
            support@byteanalytics.com
          </Text>
          <div className="flex flex-col gap-[39px]">
            {[
              {
                title: 'Can I enroll in multiple courses at once?',
                info: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
              },
              {
                title: 'What kind of support can I expect from instructors?',
                info: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
              },
              {
                title:
                  'Are the courses self-paced or do they have specific start and end dates?',
                info: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
              },
              {
                title: 'Are there any prerequisites for the courses?',
                info: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
              },
              {
                title:
                  'Can I download the course materials for offline access?',
                info: 'Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.',
              },
            ].map((faq, index) => (
              <FaqBody key={index} {...faq} />
            ))}
          </div>
        </MaxScreenWrapper>
      </div>
    </section>
  );
};
