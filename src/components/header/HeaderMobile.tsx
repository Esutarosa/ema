import type { FC } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@nextui-org/popover';

import { Bars2Icon } from '@heroicons/react/24/solid';

import LinkWithArrow from '@/components/LinkWithArrow';

interface HeaderMobileProps {
  data: {
    href: string;
    label: string;
    target: string | undefined;
  }[];
}

const HeaderMobile: FC<HeaderMobileProps> = ({ data }) => {

  const Content = () => {
    return (
      <PopoverContent className='bg-background border border-muted p-2 rounded-md'>
        <div className='flex flex-col gap-3 backdrop-blur-[20px] '>
          {data.map((item, index) => (
            <LinkWithArrow
              key={index}
              href={item.href}
              content={item.label}
              target={item.target}
            />
          ))}
          <LinkWithArrow
            href='https://findmestore.thinkr.jp/collections/dustcell'
            content='CD & GOODS'
            target='_blank'
          />
        </div>
      </PopoverContent>
    );
  }

  return (
    <Popover placement='bottom' backdrop='blur' offset={24}>
      <PopoverTrigger>
        <Bars2Icon className='2xl:hidden cursor-pointer size-6' />
      </PopoverTrigger>
      <Content />
    </Popover>
  );
}

export default HeaderMobile;