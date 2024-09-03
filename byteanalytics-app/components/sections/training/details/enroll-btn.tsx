import { Button } from '@/components/ui/button';
import { ArrowRight } from 'iconsax-react';

export const EnrollBtn: React.FC = () => {
  return (
    <Button
      onClick={() =>
        (window.location.href = `${process.env.NEXT_PUBLIC_PAYMENT_GATEWAY}`)
      }
      className="mt-2 h-[60px] font-[600] flex gap-4 text-[21px] text-white bg-lemongreen rounded px-[36px]"
    >
      Enroll Now <ArrowRight size="18" color="white" />
    </Button>
  );
};
