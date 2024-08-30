import { Clients } from '@/components/sections/home/clients.section';
import { Courses } from '@/components/sections/home/courses.section';
import { Data } from '@/components/sections/home/data.section';
import { HomeHero } from '@/components/sections/home/hero.section';
import { Insights } from '@/components/sections/home/insights.section';
import { Subscription } from '@/components/sections/home/subscription';

export default function Home() {
  return (
    <>
      <HomeHero />
      <Clients />
      <Insights />
      <Data />
      <Courses />
      <Subscription />
    </>
  );
}
