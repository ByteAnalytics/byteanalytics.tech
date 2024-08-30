'use client';

import { Text } from '@/components/global/text';
import img1 from '../../../public/courses/Image.svg';
import img2 from '../../../public/courses/image 2.svg';
import { DmSans } from '@/app/layout';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { OfferCard } from './offer-card';
import { CourseTagBg } from '@/lib/types/services';

export const Offers: React.FC = () => {
  return (
    <section className="bg-[#F1F5F9] py-[6rem] md:px-[8rem] px-4">
      <MaxScreenWrapper>
        <Text
          as="h1"
          style="lg:text-[48px] text-[30px] font-[700] mb-4 text-center"
        >
          What we Offer
        </Text>
        <Text
          as="h2"
          style={`md:text-[18px] text-[16px] mb-8 text-[#5F6368] font-[400] text-center ${DmSans.className}`}
        >
          Some courses relating to our services
        </Text>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {[
            {
              img: img1,
              title: 'Data Analytics',
              info: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
              courseBgFor: CourseTagBg.analytics,
              course: 1,
            },
            {
              img: img2,
              title: 'Data Enginieering & Science',
              info: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
              courseBgFor: CourseTagBg.engineering,
              course: 2,
            },
            {
              img: img1,
              title: 'Data Science & AI',
              info: 'Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.',
              courseBgFor: CourseTagBg.science,
              course: 3,
            },
          ].map((course, index) => (
            <OfferCard key={index} {...course} />
          ))}
        </div>
      </MaxScreenWrapper>
    </section>
  );
};
