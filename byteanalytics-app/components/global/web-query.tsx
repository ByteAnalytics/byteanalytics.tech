'use client';

import { Book } from 'iconsax-react';
import { ModalWrapper } from '../ui/custom-ui/modal-layout';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Services, Trainings } from '@/lib/constants/query';
import { useRouter } from 'next/navigation';
import { ICommandItemBox, IWebsiteQueryProp } from '@/lib/types/global';

export const WebsiteQuery: React.FC<IWebsiteQueryProp> = ({
  children,
}: IWebsiteQueryProp) => {
  const router = useRouter();
  const CommandItemBox: React.FC<ICommandItemBox> = ({
    route,
    title,
    desc,
  }: ICommandItemBox) => (
    <CommandItem onClick={() => router.push(route)}>
      <Book size="18" color="grey" className="mr-4" />
      <span>{title}</span>
      <span className="hidden">{desc}</span>
    </CommandItem>
  );
  return (
    <ModalWrapper trigger={children} style="max-w-[470px]">
      <Command
        filter={(value, search) => {
          if (value.includes(search)) return 1;
          return 0;
        }}
        className="rounded-lg border shadow-md md:min-w-[450px]"
      >
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Services">
            {Services.map((serv, index) => (
              <CommandItemBox
                route={`/services/${serv.route}`}
                title={serv.title}
                desc={serv.description}
                key={index}
              />
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Trainings">
            {Trainings.map((serv, index) => (
              <CommandItemBox
                route={`/training/${serv.route}`}
                title={serv.title}
                desc={serv.description}
                key={index}
              />
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </ModalWrapper>
  );
};
