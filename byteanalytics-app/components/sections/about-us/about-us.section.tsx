'use client';
import { Text } from '@/components/global/text';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { CustomImage } from '@/components/global/image';
import { ArrowLeft2, ArrowRight, ArrowRight2 } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import img from '../../../public/about-us/Frame 1424.svg';
import img2 from '../../../public/about-us/Frame 1525.svg';
import img3 from '../../../public/about-us/Frame 1525 (1).svg';
import img4 from '../../../public/about-us/Frame 1424 (1).svg';
import img5 from '../../../public/about-us/Frame 1424 (2).svg';
import img6 from '../../../public/about-us/Frame 1424 (3).svg';
import img7 from '../../../public/about-us/Gallery.svg';
import img8 from '../../../public/about-us/Group 1000001765.svg';
import img9 from '../../../public/about-us/ic_format_quote_48px.svg';
import blubg from '../../../public/about-us/unsplash_PGdW_bHDbpI.svg';
import { Rating } from 'react-simple-star-rating';
import { TeamsCard } from './teams-card';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';

export const AboutUs: React.FC = () => {
  const swiperRef = React.useRef<any>(null);
  return (
    <section>
      <MaxScreenWrapper style="flex flex-col md:gap-[160px] gap-[80px] py-[6rem] md:px-[8rem] px-4 relative  bg-lightgrey">
        <CustomImage src={blubg} style={'absolute top-[-2rem] left-0 w-[600px] h-[416px]'} />
        <div className="flex md:flex-row flex-col md:gap-12 gap-4 items-center justify-between">
          <div className="md:w-[50%] w-full">
            <Text
              as="h1"
              style="md:text-[40px] text-[30px] font-[700] text-black md:text-start text-center"
            >
              Our Mission
            </Text>
          </div>
          <div className="md:w-[50%] w-full">
            <Text
              as="h2"
              style={`md:text-start text-center md:w-[90%] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 w-full md:leading-[39.6px] leading-[35px]`}
            >
              Discover a simpler way to meet your regulatory obligations. Save
              time and resources, and gain valuable insights that drive informed
              decision-making. Discover a simpler way to meet your
            </Text>
          </div>
        </div>
        <div className="flex md:flex-row flex-col md:gap-12 gap-4 items-center justify-between">
          <div className="md:w-[50%] w-full">
            <Text
              as="h3"
              style={`md:text-start text-center md:w-[90%] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 w-full md:leading-[39.6px] leading-[35px]`}
            >
              Discover a simpler way to meet your regulatory obligations. Save
              time and resources, and gain valuable insights that drive informed
              decision-making. Discover a simpler way to meet your
            </Text>
          </div>
          <div className="md:w-[50%] w-full flex flex-col md:order-none order-first">
            <Text
              as="h1"
              style="md:text-[40px] text-[30px] font-[700] text-black md:text-start text-center"
            >
              Our Vision
            </Text>
            <Text
              as="h1"
              style="md:text-[40px] text-[30px] font-[700] text-[#8989A2] md:text-start text-center"
            >
              Were Here For You
            </Text>
          </div>
        </div>
        <div>
          <Text
            as="h1"
            style="md:text-[40px] text-[30px] font-[700] text-black md:text-start text-center"
          >
            Our Team
          </Text>
          <Text
            as="h1"
            style="md:text-[40px] text-[30px] font-[700] text-[#8989A2] md:text-start text-center mb-8"
          >
            Professionals And Researchers
          </Text>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {[
              {
                img: img,
                title: 'Floyd Miles',
                info: 'Discover a simpler way to meet your regulatory obligations. Save time and resources, and gain valuable insights that drive informed decision-making. Discover a simpler way to meet your regulatory obligations. ',
              },
              {
                img: img2,
                title: 'Floyd Miles',
                info: 'Discover a simpler way to meet your regulatory obligations. Save time and resources, and gain valuable insights that drive informed decision-making. Discover a simpler way to meet your regulatory obligations. ',
              },
              {
                img: img3,
                title: 'Floyd Miles',
                info: 'Discover a simpler way to meet your regulatory obligations. Save time and resources, and gain valuable insights that drive informed decision-making. Discover a simpler way to meet your regulatory obligations. ',
              },
              {
                img: img4,
                title: 'Floyd Miles',
                info: 'Discover a simpler way to meet your regulatory obligations. Save time and resources, and gain valuable insights that drive informed decision-making. Discover a simpler way to meet your regulatory obligations. ',
              },
              {
                img: img5,
                title: 'Floyd Miles',
                info: 'Discover a simpler way to meet your regulatory obligations. Save time and resources, and gain valuable insights that drive informed decision-making. Discover a simpler way to meet your regulatory obligations. ',
              },
              {
                img: img6,
                title: 'Floyd Miles',
                info: 'Discover a simpler way to meet your regulatory obligations. Save time and resources, and gain valuable insights that drive informed decision-making. Discover a simpler way to meet your regulatory obligations. ',
              },
            ].map((course, index) => (
              <TeamsCard key={index} {...course} />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4">
          <div className="m-auto">
            <Text
              as="h1"
              style="md:text-[40px] text-[30px] font-[700] text-black"
            >
              Our Responsibility
            </Text>
            <Text
              as="h2"
              style="md:text-[40px] text-[30px] font-[700] text-[#5F6368B2]"
            >
              Simple Ethical Practices
            </Text>
            <Text
              as="h3"
              style={`md:w-[90%] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 w-full md:leading-[39.6px] leading-[35px]`}
            >
              Fusce lobortis leo augue, sit amet tristique nisi commodo in.
              Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc
              libero. Curabitur in urna ligula. torquent per conubia nostra.
            </Text>
            <Button className=" h-[60px] font-[600] flex gap-4 text-[21px] text-white bg-lemongreen rounded">
              Join Our Team <ArrowRight size="18" color="white" />
            </Button>
          </div>
          <CustomImage
            src={img7}
            style={'md:order-none order-first w-full md:h-[35rem] h-[30rem]'}
          />
        </div>
      </MaxScreenWrapper>
      <div className="bg-[#E6F0FC] py-[6rem] md:px-[8rem] px-4">
        <MaxScreenWrapper>
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
              <div className="flex md:flex-row flex-col md:gap-[160px] gap-[20px] items-center justify-between">
                <div className="flex flex-col justify-start items-start md:w-[50%] w-full">
                  <CustomImage
                    src={img9}
                    style={'w-[39.44px] h-[28.43px] mb-4'}
                  />
                  <Text
                    as="h1"
                    style="md:text-[35px] text-[25px] font-[700] text-black mb-2"
                  >
                    Maria DuBois
                  </Text>
                  <Text
                    as="h2"
                    style="md:text-[22px] text-[18px] font-[400] text-[#696984]"
                  >
                    “OMG! I cannot believe that I have got a brand new Job
                    letter after getting your services. It was super easy to
                    order and get started.”
                  </Text>
                  <div className="flex gap-4 items-center mb-2">
                    <Rating
                      initialValue={5}
                      readonly={true}
                      size={20}
                      SVGstyle={{ display: 'inline' }}
                    />
                  </div>
                  <Text as="h3" style=" text-[18px] font-[700] text-black">
                    STUDENT
                  </Text>
                </div>
                <div className="md:w-[50%] w-full md:order-none order-first">
                  <CustomImage src={img8} style={' w-full h-[424px]'} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="flex gap-8 mt-8">
            <ArrowLeft2
              size="23"
              variant="Outline"
              color="#52C41A"
              onClick={() =>
                swiperRef.current !== null &&
                swiperRef.current.swiper.slidePrev()
              }
            />
            <ArrowRight2
              size="23"
              variant="Outline"
              color="#52C41A"
              onClick={() =>
                swiperRef.current !== null &&
                swiperRef.current.swiper.slideNext()
              }
            />
          </div>
        </MaxScreenWrapper>
      </div>
    </section>
  );
};
