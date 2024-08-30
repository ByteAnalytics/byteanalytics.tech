'use client';
import { MaxScreenWrapper } from '@/components/global/max-screen';
import { Text } from '@/components/global/text';
import { Button } from '@/components/ui/button';

export const Cohort: React.FC = () => {
  return (
    <section>
      <MaxScreenWrapper style="bg-join-cohort flex flex-col justify-center items-center py-[6rem] md:px-[8rem] px-4 gap-4">
        <Text
          as="h1"
          style="md:text-[48px] md:w-[70%] w-auto text-[35px] font-[700] mb-2 text-center text-white pt-4"
        >
          Kickstart Your Learning Journey With A Course
        </Text>
        <Button className={`gap-[10px] px-[40px] py-[20px] h-[58px] bg-lemongreen text-white rounded text-center text-[14.44px]`}>
          Join Our Cohort
        </Button>
      </MaxScreenWrapper>
    </section>
  );
};
