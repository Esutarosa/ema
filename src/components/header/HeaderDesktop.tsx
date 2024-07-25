import type { FC } from 'react';

import LinkWithArrow from '@/components/LinkWithArrow';

interface HeaderDesktopProps {
  data: {
    href: string;
    content: string;
    target: string | undefined;
  }[];
}

const HeaderDesktop: FC<HeaderDesktopProps> = ({ data }) => {
  return (
    <div className='hidden 2xl:flex 2xl:justify-between w-full'>
      <div className='2xl:flex 2xl:gap-3'>
        {data.map((item, index) => (
          <LinkWithArrow
            key={index}
            href={item.href}
            content={item.content}
            target={item.target}
          />
        ))}
      </div>
      <LinkWithArrow
        href='https://findmestore.thinkr.jp/collections/dustcell'
        content='CD & GOODS'
        target='_blank'
      />
    </div>
  );
}

export default HeaderDesktop;