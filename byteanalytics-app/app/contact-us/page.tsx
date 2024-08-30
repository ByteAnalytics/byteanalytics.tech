import { ContactUs } from '@/components/sections/contact-us/contact-us.section';
import { FaqSection } from '@/components/sections/contact-us/faq.section';
import { ContactUsHero } from '@/components/sections/contact-us/hero.section';

export default function ContactUsPage() {
  return (
    <>
      <ContactUsHero />
      <ContactUs />
      <FaqSection />
    </>
  );
}
