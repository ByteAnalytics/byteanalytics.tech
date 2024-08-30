import { ServiceHero } from '@/components/sections/services/hero.section';
import { Cohort } from '@/components/sections/services/join-cohort.section';
import { AllServices } from '@/components/sections/services/services.section';

export default function Services() {
  return (
    <>
      <ServiceHero />
      <AllServices />
      <Cohort />
    </>
  );
}
