import { ILogoPropType } from '@/lib/types/global';
import Brand from '../../public/BYTE ANALYTICS.svg';
import { CustomImage } from './image';
import { cn } from '@/lib/utils';
export const Logo: React.FC<ILogoPropType> = ({ style }: ILogoPropType) => (
  <CustomImage src={Brand} style={cn('w-[6.5rem] h-[3.5rem]', style)} />
);
