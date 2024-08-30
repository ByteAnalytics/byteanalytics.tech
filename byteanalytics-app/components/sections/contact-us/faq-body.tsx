import { Text } from '@/components/global/text';
import { IFaqBodyPropType } from '@/lib/types/about-us';
import { Add } from 'iconsax-react';
import { useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export const FaqBody: React.FC<IFaqBodyPropType> = ({
  title,
  info,
}: IFaqBodyPropType) => {
  const [isOpen, setIsOpen] = useState(false);
  const faqRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    setIsOpen((prevState)=>!prevState);
    faqRef.current !== null && faqRef.current.classList.toggle('active');
  };
  return (
    <div className="bg-white rounded-[15px] lg:p-[65px] md:p-[45px] p-4 cursor-pointer">
      <div className="flex md:items-center items-start justify-between gap-4">
        <div>
          <Text as="h3" style="text-[24px] leading-[35px] font-[400]">
            {title}
          </Text>
        </div>
        <div className="rounded-[10px] p-[15px] w-fit bg-[ghostwhite]" onClick={handleToggle}>
          {isOpen ? (
            <AiOutlineClose size="20" color="#52C41A" />
          ) : (
            <Add size="20" color="#52C41A" />
          )}
        </div>
      </div>
      <div ref={faqRef} className="faq-ans">
        <Text
          as="h4"
          style="text-[23px] leading-[35px] font-[700] text-lemongreen"
        >
          {info}
        </Text>
      </div>
    </div>
  );
};
