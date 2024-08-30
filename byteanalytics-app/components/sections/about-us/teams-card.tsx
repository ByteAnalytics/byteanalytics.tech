import { DmSans } from '@/app/layout';
import { CustomImage } from '@/components/global/image';
import { Text } from '@/components/global/text';
import { ITeamCardPropType } from '@/lib/types/about-us';

export const TeamsCard: React.FC<ITeamCardPropType> = ({
  img,
  title,
  info,
}: ITeamCardPropType) => {
  return (
    <figure className="rounded-md">
      <CustomImage
        src={img}
        style={'w-full h-[377px]'}
        imgStyle=" rounded-tl-lg rounded-tr-lg"
      />
      <figcaption className="md:py-[1.5rem] py-4">
        <Text as="h2" style="text-[25.6px] mb-4 font-[700]">
          {title}
        </Text>
        <Text
          as="h4"
          style={`text-[16px] font-[400] text-[#696984] leading-[29px] ${DmSans.className}`}
        >
          {info}
        </Text>
      </figcaption>
    </figure>
  );
};
