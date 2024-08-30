import { IMaxScreenWrapperPropType } from '@/lib/types/global';
import { cn } from '@/lib/utils';

export const MaxScreenWrapper: React.FC<IMaxScreenWrapperPropType> = ({
  style,
  children,
}: IMaxScreenWrapperPropType) => {
  return <div className={cn('m-auto max-w-[1440px]', style)}>{children}</div>;
};
