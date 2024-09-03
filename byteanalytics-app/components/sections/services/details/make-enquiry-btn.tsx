import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export const MakeEnquiryBtn:React.FC = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push('/contact-us')}
      className=" h-[60px] font-[600] flex gap-4 text-[21px] text-white bg-lemongreen rounded px-[24px]"
    >
      Make Enquiry
    </Button>
  );
};
