import { DmSans } from '@/app/layout';
import { CustomImage } from '@/components/global/image';
import { Text } from '@/components/global/text';
import { Button } from '@/components/ui/button';
import { CourseTagBg } from '@/lib/types/services';
import { IOfferCardPropType } from '@/lib/types/services';
import { Clock } from 'iconsax-react';

export const OfferCard: React.FC<IOfferCardPropType> = ({
  img,
  title,
  course,
  info,
  courseBgFor,
}: IOfferCardPropType) => {
  return (
    <figure className="bg-white p-[1.5rem] rounded-md">
      <CustomImage
        src={img}
        style={'w-full h-[10rem]'}
        imgStyle="object-cover rounded-tl-lg rounded-tr-lg"
      />
      <figcaption>
        <div
          className={`flex items-center mb-4  gap-2 ${courseBgFor} w-fit rounded-sm text-[13.63px] font-[700] p-[0.4rem] ${DmSans.className}`}
        >
          <Clock
            size="13"
            color={
              courseBgFor === CourseTagBg.analytics
                ? '#CC54FF33'
                : courseBgFor === CourseTagBg.engineering
                ? '#40BFB1'
                : '#6997FF'
            }
          />
          <span className="flex gap-1">
            {course} {course > 1 ? 'Courses' : 'Course'}
          </span>
        </div>
        <Text as="h3" style="text-lg mb-1 font-[700]">
          {title}
        </Text>
        <Text
          as="h4"
          style={`text-[16px] font-[400] text-[#696984] md:w-[70%] w-full leading-6 ${DmSans.className} mb-2`}
        >
          {info}
        </Text>
        <Button
          className={`gap-[10px] px-[40xp] py-[20px] h-[58px] bg-lemongreen text-white rounded text-center text-[14.44px] w-full ${DmSans.className}`}
        >
          Make Enquiry
        </Button>
      </figcaption>
    </figure>
  );
};
