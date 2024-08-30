import { ICustomImagePropType } from '@/lib/types/global';
import { cn } from '@/lib/utils';
import Image from 'next/legacy/image';

export const CustomImage: React.FC<ICustomImagePropType> = ({
  src,
  alt = 'object not found',
  style,
  imgStyle
}: ICustomImagePropType) => {
  return (
    <div className={cn('relative', style)}>
      <Image src={src} alt={alt} className={cn('w-full', imgStyle)} layout="fill" priority/>
    </div>
  );
};
