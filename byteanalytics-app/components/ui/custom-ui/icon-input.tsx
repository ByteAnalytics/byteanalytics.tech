'use client';
import { Input } from '@/components/ui/input';
import { IIconInputPropType } from '@/lib/types/global';
import { cn } from '@/lib/utils';
export const IconInput: React.FC<IIconInputPropType> = ({
  icon,
  placeHolder,
  handleChange,
  contStyle,
  type,
  style,
  category,
  defaultValue,
  field,
}: IIconInputPropType) => {
  return (
    <div className={cn('relative', contStyle)}>
      <span className="absolute top-[0.7rem] left-[0.5rem]">{icon}</span>
      <span>
        {category? (
          <Input
            required
            placeholder={placeHolder}
            {...field}
            type={type}
            className={cn('ps-[2.2rem] py-[0.6rem] w-full border-none', style)}
            defaultValue={defaultValue}
          />
        ) : (
          <Input
            required
            placeholder={placeHolder}
            type={type}
            onChange={handleChange}
            defaultValue={defaultValue}
            className={cn('ps-[2.2rem] py-[0.6rem] w-full border-none', style)}
          />
        )}
      </span>
    </div>
  );
};
