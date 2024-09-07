'use client';
import { useRef } from 'react';
import { Logo } from '../global/logo';
import { SearchNormal1, Notification } from 'iconsax-react';
import { IconInput } from '../ui/custom-ui/icon-input';
import { AiOutlineHeart } from 'react-icons/ai';
import { Button } from '../ui/button';
import Hamburger from 'hamburger-react';
import { usePathname } from 'next/navigation';
import { NavRoutes } from '@/lib/constants/nav';
import Link from 'next/link';
import { DmSans } from '@/app/layout';
import { WebsiteQuery } from '../global/web-query';
export const TopNav: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const currentpath = usePathname();
  // const handleSearchQuery =(e:any)=>{
  //   trainings
  // }
  return (
    <header
      className="shadow-md fixed top-0 left-0 right-0 z-[1000] bg-white"
      id="top"
    >
      <nav className="lg:block hidden w-full px-[2rem] bg-black">
        <ul
          className={`flex lg:flex-row flex-col gap-4 m-auto max-w-[1440px] ${DmSans.className}`}
        >
          {NavRoutes.map((links, index) => (
            <li
              key={index}
              className={`${
                currentpath === links.activeRoute
                  ? 'border-b-2 border-lemongreen text-white'
                  : 'border-none text-[#8C94A3]'
              } text-[14px] p-[16px] font-[500]`}
            >
              <Link href={links.route} className={'text-none'}>
                {links.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className=" md:px-[2rem] px-2 md:py-[1rem] py-2 flex items-center lg:flex-row flex-col lg:gap-[5rem] gap-0 my-0 m-auto max-w-[1440px]">
        <div className="lg:w-fit w-full flex items-center justify-between">
          <Logo />
          <div className="flex gap-4 lg:hidden items-center">
            <WebsiteQuery>
              <SearchNormal1 size="17" color="#1D2026" className="cursor-pointer"/>
            </WebsiteQuery>
            <Hamburger
              onToggle={() =>
                navRef.current !== null &&
                navRef.current.classList.toggle('active')
              }
              color="black"
              easing="ease-in"
              size={20}
            />
          </div>
        </div>
        <div
          ref={navRef}
          className=" z-[1000] bg-white nav justify-between flex-grow lg:flex-row flex-col  lg:gap-[6rem] items-center justify-center md:w-auto w-full"
        >
          <WebsiteQuery>
            <IconInput
              icon={<SearchNormal1 size="17" color="#1D2026" />}
              placeHolder="What do you want to learn..."
              handleChange={() => console.log('hello')}
              contStyle="xl:w-[527px] lg:w-[327px] lg:block hidden rounded w-full text-sm font-400 border"
              type="text"
            />
          </WebsiteQuery>
          <div className="lg:pe-[4rem] pe-0 gap-4 flex items-center lg:flex-row flex-col md:w-auto w-full">
            <div className="lg:flex gap-4 hidden items-center">
              <Notification
                size="20"
                color="#1E2833"
                className="cursor-pointer"
              />
              <AiOutlineHeart
                size="20"
                color="#1E2833"
                className="cursor-pointer"
              />
            </div>
            <nav className="lg:hidden block w-full px-0 py-0 bg-white">
              <ul
                className={`flex lg:flex-row flex-col gap-4 justify-center items-center ${DmSans.className}`}
              >
                {NavRoutes.map((links, index) => (
                  <li
                    key={index}
                    className={`${
                      currentpath === links.activeRoute
                        ? 'border-b-2 border-lemongreen'
                        : 'border-none'
                    } text-[#8C94A3] text-[14px] p-[16px] font-[500] w-fit`}
                  >
                    <Link href={links.route} className={'text-none'}>
                      {links.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex gap-2 md:flex-row flex-col  md:w-auto w-full">
              <Button disabled className="bg-lightpurple text-black rounded px-[24px] py-4 text-[16px] font-[600] md:w-auto w-full">
                Create Account
              </Button>
              <Button disabled className="bg-black text-white px-[24px] py-4 text-[16px] font-[600] rounded md:w-auto w-full">
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
