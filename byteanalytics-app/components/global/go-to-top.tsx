'use client';
import Link from 'next/link';
import { ArrowUp2 } from 'iconsax-react';
import { useWindowHeight } from '@/lib/hooks/dimensionHeight';
export const GotoTop = () => {
  const scrollY = useWindowHeight();

  return (
    <Link href="#top" className="text-none">
    <div
      role="button"
      className={`${
        scrollY > 500
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-[10rem]'
        }
        p-4 text-4xl rounded-full bg-lemongreen fixed md:bottom-[22rem] bottom-10 md:right-[12rem] right-5 z-[900] select-none flex flex-col items-center border border-[#CCD0D4] text-black transition-all duration-1000 bg-[#001D48] backdrop-blur-xl cursor-pointer active:scale-75 active:duration-300
        `}
    >
      
      <ArrowUp2 size="15" color="white"/>
      
    </div>
    </Link>
  );
};
