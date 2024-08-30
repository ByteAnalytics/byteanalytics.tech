'use client';
import { Text } from '@/components/global/text';
import { DmSans } from '@/app/layout';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { CustomImage } from '@/components/global/image';
import { ArrowRight } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import img from '../../../public/service/Frame 1578.svg';
import img2 from '../../../public/service/Frame 1577.svg';
import img3 from '../../../public/service/Frame 1576 (1).svg';
import img4 from '../../../public/service/Frame 1575.svg';
import img5 from '../../../public/service/Frame 1576 (2).svg';
import { useRouter } from 'next/navigation';
export const AllServices: React.FC = () => {
  const router = useRouter();
  return (
    <section className="bg-lightgrey py-[6rem] md:px-[8rem] px-4">
      <MaxScreenWrapper style="flex flex-col md:gap-[160px] gap-[80px]">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4">
          <div>
            <Text
              as="h1"
              style="md:text-[40px] text-[30px] font-[700] text-black"
            >
              Consulting Services
            </Text>
            <Text
              as="h2"
              style={`md:w-[90%] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 w-full md:leading-[39.6px] leading-[35px]`}
            >
              We offer expert advice on how to best leverage data to meet
              business objectives, from strategy development to implementation.
            </Text>
            <Button
              onClick={() => router.push('/services/consult')}
              className=" h-[60px] font-[600] flex gap-4 text-[21px] text-black bg-white border border-black rounded"
            >
              Read More <ArrowRight size="18" color="black" />
            </Button>
          </div>
          <CustomImage
            src={img}
            style={'md:order-none order-first w-full md:h-full h-[17rem]'}
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4">
          <CustomImage
            src={img2}
            style={'w-full md:h-full h-[17rem] md:order-none order-first'}
          />
          <div>
            <Text
              as="h1"
              style="md:text-[40px] text-[30px] font-[700] mb-4 text-black"
            >
              Business Process Automation
            </Text>
            <Text
              as="h2"
              style={`md:w-[90%] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 w-full md:leading-[39.6px] leading-[35px]`}
            >
              We help businesses automate routine processes using data-driven
              solutions, leading to increased efficiency and reduced operational
              costs.
            </Text>
            <Button className=" h-[60px] font-[600] flex gap-4 text-[21px] text-black bg-white border border-black rounded">
              Read More <ArrowRight size="18" color="black" />
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4">
          <div>
            <Text
              as="h1"
              style="md:text-[40px] text-[30px] font-[700] mb-4 text-black"
            >
              Software Engineering & Development
            </Text>
            <Text
              as="h2"
              style={`md:w-[90%] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 w-full md:leading-[39.6px] leading-[35px]`}
            >
              Our software development services focus on creating custom
              solutions that meet specific business needs, integrating
              seamlessly with existing systems.
            </Text>
            <Button className=" h-[60px] font-[600] flex gap-4 text-[21px] text-black bg-white border border-black rounded">
              Read More <ArrowRight size="18" color="black" />
            </Button>
          </div>
          <CustomImage
            src={img3}
            style={'md:order-none order-first w-full md:h-full h-[17rem]'}
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4">
          <CustomImage
            src={img4}
            style={'w-full md:h-full h-[17rem] md:order-none order-first'}
          />
          <div>
            <Text
              as="h1"
              style="md:text-[40px] text-[30px] font-[700] mb-4 text-black"
            >
              Workforce Management (Support)
            </Text>
            <Text
              as="h2"
              style={`md:w-[90%] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 w-full md:leading-[39.6px] leading-[35px]`}
            >
              We provide workforce management solutions that help businesses
              optimize the use of their human resources.
            </Text>
            <Button className=" h-[60px] font-[600] flex gap-4 text-[21px] text-black bg-white border border-black rounded">
              Read More <ArrowRight size="18" color="black" />
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-12 gap-4">
          <div>
            <Text
              as="h1"
              style="md:text-[40px] text-[30px] font-[700] mb-4 text-black"
            >
              Cloud Solution & Services
            </Text>
            <Text
              as="h2"
              style={`md:w-[90%] md:text-[22px] text-[18px] font-[400] text-[#8989A2] mb-4 w-full md:leading-[39.6px] leading-[35px]`}
            >
              Our cloud services include cloud migration, infrastructure
              management, and optimization, enabling businesses to leverage the
              power of cloud computing.
            </Text>
            <Button className=" h-[60px] font-[600] flex gap-4 text-[21px] text-black bg-white border border-black rounded">
              Read More <ArrowRight size="18" color="black" />
            </Button>
          </div>
          <CustomImage
            src={img5}
            style={'md:order-none order-first w-full h-[20rem]'}
            imgStyle='object-cover'
          />
        </div>
      </MaxScreenWrapper>
    </section>
  );
};
