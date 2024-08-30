import { DmSans } from '@/app/layout';
import { CustomImage } from '@/components/global/image';
import { Text } from '@/components/global/text';
import { Button } from '@/components/ui/button';
import { ICourseCardPropType } from '@/lib/types/home';
import { Rating } from 'react-simple-star-rating';

export const CourseCard: React.FC<ICourseCardPropType> = ({
  img,
  title,
  rating,
  info,
  price,
  star,
  actualPrice,
}: ICourseCardPropType) => {
  return (
    <figure>
      <CustomImage
        src={img}
        style={'w-full h-[13rem]'}
        imgStyle="object-cover rounded-tl-lg rounded-tr-lg"
      />
      <figcaption className="p-4 bg-white rounded-bl-lg rounded-br-lg border">
        <Text as="h3" style="text-lg mb-1 font-[700]">
          {title}
        </Text>
        <Text
          as="h4"
          style={`text-[16px] font-[400] text-[#696984] md:w-[70%] w-full leading-6 mb-2`}
        >
          {info}
        </Text>
        <div className="flex gap-4 items-center text-[18px] leading-6 font-[700]">
          <Text as="h5" style="text-blue">
            ${price}
          </Text>
          <Text as="h5" style="text-[#696984] line-through">
            ${actualPrice}
          </Text>
        </div>
        <div className="flex gap-4 items-center mb-2">
          <Rating
            initialValue={rating}
            readonly={true}
            size={20}
            SVGstyle={{ display: 'inline' }}
          />
          <Text as="h5" style="text-sm font-[600] text-[#696984]">
            ({star})
          </Text>
        </div>
        <Button
          className={`gap-[10px] px-[40xp] py-[20px] h-[58px] bg-lemongreen text-white rounded text-center text-[14.44px] w-full ${DmSans.className}`}
        >
          Learn More
        </Button>
      </figcaption>
    </figure>
  );
};
