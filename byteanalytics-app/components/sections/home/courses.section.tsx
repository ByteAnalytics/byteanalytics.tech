"use client";
import { Text } from '@/components/global/text';
import img1 from '../../../public/courses/Image.svg';
import img2 from '../../../public/courses/image 2.svg';
import { CourseCard } from './course-card';
import { DmSans } from '@/app/layout';
import { MaxScreenWrapper } from '@/components/global/max-screen';

export const Courses: React.FC = () => {
  return (
    <section className="bg-lightgrey py-[6rem] md:px-[8rem] px-4">
      <MaxScreenWrapper>
        <Text as="h1" style="md:text-[40.76px] text-[33px] font-[700] mb-4 text-center">
          Take a course to amplify your skills
        </Text>
        <Text
          as="h2"
          style={`md:text-[29.44px] text-[24.44px] mb-8 text-[#5F6368] font-[400] text-center ${DmSans.className}`}
        >
          Helping you transform in these areas
        </Text>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          {[
            {
              img: img1,
              title: 'Data Analytics',
              info: 'Form actionable business insights using Azure data analytics',
              actualPrice: '360',
              price: '260',
              star: '65',
              rating:4,
            },
            {
              img: img2,
              title: 'Data Analytics',
              info: 'Form actionable business insights using Azure data analytics',
              actualPrice: '360',
              price: '260',
              rating:4,
              star: '65',
            },
            {
              img: img1,
              title: 'Data Analytics',
              info: 'Form actionable business insights using Azure data analytics',
              actualPrice: '360',
              price: '260',
              rating:4,
              star: '65',
            },
            {
              img: img2,
              title: 'Data Analytics',
              info: 'Form actionable business insights using Azure data analytics',
              actualPrice: '360',
              price: '260',
              rating:4,
              star: '65',
            },
            {
              img: img1,
              title: 'Data Analytics',
              info: 'Form actionable business insights using Azure data analytics',
              actualPrice: '360',
              price: '260',
              star: '65',
              rating:4
            },
            {
              img: img2,
              title: 'Data Analytics',
              info: 'Form actionable business insights using Azure data analytics',
              actualPrice: '360',
              price: '260',
              star: '65',
              rating:4
            },
          ].map((course, index) => (
            <CourseCard
                key={index}
                {...course}
            />
          ))}
        </div>
      </MaxScreenWrapper>
    </section>
  );
};
