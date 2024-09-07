'use client';

import { CustomImage } from '@/components/global/image';
import { Text } from '@/components/global/text';
import logo1 from '../../../public/clients/logo.png';
import logo2 from '../../../public/clients/logo (2).svg';
import logo3 from '../../../public/clients/logo (3).svg';
import logo4 from '../../../public/clients/logo (4).svg';
import logo5 from '../../../public/clients/logo (5).svg';
import logo6 from '../../../public/clients/Vector (5).svg';
import { MaxScreenWrapper } from '@/components/global/max-screen';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination ,FreeMode} from 'swiper/modules';
import React from 'react';

export const Clients: React.FC = () => {
  const swiperRef = React.useRef<any>(null);

  return (
    <section className="bg-[ghostwhite] py-8 md:px-[8rem] px-4 py-8 freemode">
      <MaxScreenWrapper>
        <Text
          as="h1"
          style="text-[36px] leading-[44px] font-[700] mb-2 text-center"
        >
          Our Clients
        </Text>
        <Text
          as="h2"
          style="text-[16px] font-[400] mb-8 text-[#8C8C8C] text-center leading-[24px] "
        >
          Here are some companies weve worked with
        </Text>
        <Swiper
          ref={swiperRef}
          slidesPerView={6}
          spaceBetween={15}
          speed={18000}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay,FreeMode]}
          breakpoints={{
            320:{
                slidesPerView: 4
            },
            425:{
                slidesPerView: 4
            },
            640: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 5
            },
            1024: {
                slidesPerView: 6
            }
            }}
          className="mySwiper"
        >
          {/* <div className="flex md:justify-between justify-center items-center w-full flex-wrap gap-4"> */}
          {[logo6, logo1, logo2, logo3, logo4, logo5, logo1].map(
            (img, index) => (
              <SwiperSlide key={index}>
                <CustomImage src={img} style={'w-[45px] h-[45px]'} />
              </SwiperSlide>
            )
          )}
          {/* </div> */}
        </Swiper>
      </MaxScreenWrapper>
    </section>
  );
};
