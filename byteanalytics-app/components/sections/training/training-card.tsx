import { DmSans } from '@/app/layout';
import { CustomImage } from '@/components/global/image';
import { Text } from '@/components/global/text';
import { Button } from '@/components/ui/button';
import { ITrainingCardPropType } from '@/lib/types/training';

export const TrainingCard: React.FC<ITrainingCardPropType> = ({
  img,
  title,
  info,
}: ITrainingCardPropType) => {
  return (
    <figure className="bg-white flex flex-col justify-between border rounded-br-lg rounded-bl-lg rounded-tl-lg rounded-tr-lg">
      <CustomImage
        src={img}
        style={'w-full h-[239px]'}
        imgStyle="object-cover rounded-tl-lg rounded-tr-lg"
      />
      <div className="md:p-[1.5rem] p-4 flex flex-col justify-between">
        <div>
          <Text as="h2" style="text-[25.6px] mb-[1rem] font-[700]">
            {title}
          </Text>
          <Text
            as="h4"
            style={`text-[19.23px] font-[400] text-[#696984] leading-[28.84px] ${DmSans.className} mb-[2.3rem]`}
          >
            {info}
          </Text>
        </div>
        <Button
          className={`gap-[10px] px-[40xp] py-[20px] h-[58px] bg-[#696984] text-white rounded text-center text-[14.44px] w-full ${DmSans.className}`}
        >
          Coming Soon
        </Button>
      </div>
    </figure>
  );
};
