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

export const Clients: React.FC = () => {
  return (
    <section className="bg-[ghostwhite] py-8 md:px-[8rem] px-4 py-8">
      <MaxScreenWrapper>
        <Text as="h1" style="text-[36px] leading-[44px] font-[700] mb-2 text-center">
          Our Clients
        </Text>
        <Text as="h2" style="text-[16px] font-[400] mb-8 text-[#8C8C8C] text-center leading-[24px] ">
          Here are some companies weve worked with
        </Text>
        <div className="flex md:justify-between justify-center items-center w-full flex-wrap gap-4">
          {[logo6, logo1, logo2, logo3, logo4, logo5, logo1].map((img, index) => (
            <CustomImage src={img} style={'w-[45px] h-[45px]'} key={index} />
          ))}
        </div>
      </MaxScreenWrapper>
    </section>
  );
};
