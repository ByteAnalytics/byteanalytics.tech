'use client';

import { CustomImage } from '@/components/global/image';
import { Text } from '@/components/global/text';
import img1 from '../../../public/home-hero/Rectangle 383 (2).svg';
import img2 from '../../../public/home-hero/Group 21.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { useRouter } from 'next/navigation';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

export const HomeHero: React.FC = () => {
  const swiperRef = React.useRef<any>(null);
  const router = useRouter();
  const TrainingBox: React.FC = () => (
    <div className={`flex flex-col`}>
      <Text
        as="h3"
        style="text-center xl:text-start md:text-[18px] text-[16px] text-[400] text-[grey]"
      >
        Join a class of students and get a data
      </Text>
      <div className="xl:mb-[4rem] md:mb-[4rem] mb-12">
        <Text
          as="h3"
          style="text-center xl:text-start md:text-[18px] text-[16px] text-[400] text-[grey]"
        >
          analytics certificate,
          <span>
            <Link
              href="/training/data-analytics"
              className="text-sm text-[400] mx-1 text-lemongreen border-lemongreen border-b-2 py-1"
            >
              Take a course
            </Link>
          </span>
          <span>now!</span>
        </Text>
      </div>
    </div>
  );
  return (
    <section className="bg-[#E6F0FC]">
      <MaxScreenWrapper style="relative flex hero-slide">
        <div className="w-full xl:w-[60%] xl:py-[7rem] xl:ps-[7rem] md:ps-[4rem] xl:pe-0 md:pe-[4rem] py-[4rem] ps-4 pe-4 md:pe-0">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={15}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="xl:pe-[3rem] text-center xl:text-start flex gap-2 flex-col text-lemongreen md:text-[56px] text-[50px] font-[900] mb-4 relative md:leading-[57px] leading-[51px]">
                <Text as="h1" style="text-black">
                  Explore Modern Data
                </Text>
                <Text as="h1" style="text-black">
                  Analytics{' '}
                  <span className="ms-[-0.5rem] text-lemongreen">.</span>
                </Text>
              </div>
              <Text
                as="h2"
                style={` text-center xl:text-start md:text-[18px] text-[16px] mb-4 text-[#8C8C8C] xl:mx-0 mx-auto md:w-[70%] w-full leading-[25px]`}
              >
                Our training programmes are structured comprehensively to ensure
                you become an expert certified by global professional bodies.
              </Text>
              <Button
                onClick={() => router.push('/training')}
                className="xl:mb-0 mb-12 flex justify-center mx-auto xl:mx-0 xl:items-start items-center gap-[10px] px-[40xp] py-[20px] h-[58px] md:w-[60%] bg-lemongreen text-white text-center md:text-[18px] text-[16px] w-full font-semibold rounded"
              >
                Get Started
              </Button>
              <CustomImage
                src={img2}
                style={'w-[182px] h-[44px] my-4 xl:mx-0 mx-auto'}
              />
              <TrainingBox />
            </SwiperSlide>
            <SwiperSlide>
              <div className="xl:pe-[3rem] text-center xl:text-start flex gap-2 flex-col text-lemongreen md:text-[50px] text-[50px] font-[900] mb-4 relative md:leading-[57px] leading-[51px]">
                <Text as="h1" style="flex flex-col xl:block text-black">
                  Take a course on Data
                </Text>
                <Text as="h1" style="text-black">
                  Engineering & Design
                </Text>
              </div>
              <Text
                as="h2"
                style={` text-center xl:text-start md:text-[18px] text-[16px] mb-4 text-[#8C8C8C] xl:mx-0 mx-auto md:w-[70%] w-full leading-[25px]`}
              >
                Understand the engineering behind Data warehousing, Data
                migration, Data governance, Master data management, Data
                modernization.
              </Text>
              <Button
                onClick={() => router.push('/training/data-engineering')}
                className="xl:mb-0 mb-12 flex justify-center mx-auto xl:mx-0 xl:items-start items-center gap-[10px] px-[40xp] py-[20px] h-[58px] md:w-[60%] bg-lemongreen text-white text-center md:text-[18px] text-[16px] w-full font-semibold rounded"
              >
                Get Started
              </Button>
              <CustomImage
                src={img2}
                style={'w-[182px] h-[44px] my-4 xl:mx-0 mx-auto'}
              />
              <TrainingBox />
            </SwiperSlide>
            <SwiperSlide>
              <div className="xl:pe-[3rem] text-center xl:text-start flex gap-2 flex-col text-lemongreen md:text-[56px] text-[50px] font-[900] mb-4 relative md:leading-[57px] leading-[51px]">
                <Text as="h1" style="flex flex-col xl:block text-black">
                  Understanding Data
                </Text>
                <Text as="h1" style="text-black">
                  Science & AI
                </Text>
              </div>
              <Text
                as="h2"
                style={` text-center xl:text-start md:text-[18px] text-[16px] mb-4 text-[#8C8C8C] xl:mx-0 mx-auto md:w-[70%] w-full leading-[25px]`}
              >
                Sentiment Analysis, Customer segmentation analysis, Anomaly
                detection, Churn Analysis, Risk management tool.
              </Text>
              <Button
                onClick={() => router.push('/training/data-science')}
                className="xl:mb-0 mb-12 flex justify-center mx-auto xl:mx-0 xl:items-start items-center gap-[10px] px-[40xp] py-[20px] h-[58px] md:w-[60%] bg-lemongreen text-white text-center md:text-[18px] text-[16px] w-full font-semibold rounded"
              >
                Get Started
              </Button>
              <CustomImage
                src={img2}
                style={'w-[182px] h-[44px] my-4 xl:mx-0 mx-auto'}
              />
              <TrainingBox />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute top-0 bottom-0 right-0 xl:left-[40%] xl:block hidden">
          <CustomImage
            src={img1}
            style={'w-full h-full'}
            imgStyle="object-cover z-[100]"
          />
        </div>
      </MaxScreenWrapper>
    </section>
  );
};
