import { CustomImage } from '../global/image';
import logImage from '../../public/Logo.svg';
import facebook from '../../public/Path.svg';
import twitter from '../../public/Path (1).svg';
import { Text } from '../global/text';
import Link from 'next/link';
import { Input } from '../ui/input';
import { ArrowRight2, Instagram } from 'iconsax-react';
import { Button } from '../ui/button';
import { DmSans } from '@/app/layout';

export const Footer = () => {
  return (
    <footer className="bg-white md:px-[9rem] px-4 py-[3rem] border">
      <div className="m-auto max-w-[1440px] ">
      <div className="grid md:grid-cols-2 grid-cols-1 mb-8">
        <div>
          <CustomImage src={logImage} style={'w-[33.12px] h-[33.74px] md:mb-4 mb-8'} />
          <Text style={`text-[16px] font-[400] ${DmSans.className}`}>
            Copyright © 2020. LogoIpsum. All rights reserved.{' '}
          </Text>
        </div>
        <div className="flex md:gap-[9rem] gap-[2rem] md:flex-row flex-col">
          <ul className={`flex flex-col gap-[1rem] ${DmSans.className}`}>
            <li className="text-[16px] font-[400]">Services</li>
            {[
              {
                title: 'Cloud Solutions and Services',
                route: '/services',
              },
              {
                title: 'Consultation',
                route: '/services',
              },
              {
                title: 'Business process automation',
                route: '/services',
              },
              {
                title: 'Software Engineering',
                route: '/services',
              },
            ].map((links, index) => (
              <li key={index} className="text-[15px] font-[400]">
                <Link href={links.route}>{links.title}</Link>
              </li>
            ))}
          </ul>
          <ul className={`flex flex-col gap-[1rem] ${DmSans.className}`}>
            <li className="text-[16px] font-[400]">About</li>
            {[
              {
                title: 'Our Story',
                route: '/about-us',
              },
              {
                title: 'Benefits',
                route: '/about-us',
              },
              {
                title: 'Team',
                route: '/about-us',
              },
              {
                title: 'Careers',
                route: '/about-us',
              },
            ].map((links, index) => (
              <li key={index} className="text-[15px] font-[400]">
                <Link href={links.route}>{links.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Text style="text-[22px] font-[400]">Subscribe To Our </Text>
        <Text style="text-[22px] font-[400]">News Letter</Text>
        <div className="flex flex-wrap justify-between items-end mt-4 w-full gap-4">
          <form className="flex items-end border-b-2 border-border2">
            <Input type="text" className="p-4 h-full border-none text-[400]" placeholder="Email Address" />
            <Button className="flex items-center justify-center bg-black text-white w-[55px] h-[50px] rounded-br-[0] rounded-bl-[0] rounded-tr-lg rounded-tl-lg">
              <ArrowRight2 size="14" color="white" />
            </Button>
          </form>
          <ul className="flex gap-4 items-center md:ms-auto ms-0">
            <li>
              <CustomImage src={facebook} style={'w-[17px] h-[15px]'} />
            </li>
            <li>
              <CustomImage src={twitter} style={'w-[17px] h-[15px]'} />
            </li>
            <li>
              <Instagram size="13" color="black" />
            </li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
};
