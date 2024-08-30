'use client';
import { IBreadCombLayoutPropType } from '@/lib/types/global';
import { ArrowLeft2 } from 'iconsax-react';
import Link from 'next/link';

export const BreadCombLayout: React.FC<IBreadCombLayoutPropType> = ({
  routes,
}: IBreadCombLayoutPropType) => {
  return (
    <div className="flex items-center gap-2 flex-nowrap text-[14px] font-[400]">
      {routes.map((route, index) => {
        const { title, linkto } = route;
        return (
          <div
            key={index}
            className={`${
              index === routes.length - 1 ? 'text-black' : 'text-[#5F6368B2]'
            } flex gap-2 items-end items-center`}
          >
            {linkto ? <Link href={linkto}>{title}</Link> : title}
            {index < routes.length - 1 && (
              <ArrowLeft2 size="15" color="black" />
            )}
          </div>
        );
      })}
    </div>
  );
};
