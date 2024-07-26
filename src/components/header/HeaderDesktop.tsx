import type { FC } from 'react';

import LinkWithArrow from '@/components/LinkWithArrow';
import AnimateItems from '@/components/AnimateItems';

import { siteConfig } from '@/config/site';

interface HeaderDesktopProps {
  data: {
    href: string;
    label: string;
    target: string | undefined;
  }[];
}

const HeaderDesktop: FC<HeaderDesktopProps> = ({ data }) => {
  return (
    <>
      <AnimateItems>
        <div className='hidden 2xl:flex 2xl:justify-between w-full'>
          <div className='2xl:flex 2xl:gap-3 uppercase'>
            {data.map((item, index) => (
              <LinkWithArrow
                key={index}
                href={item.href}
                content={item.label}
                target={item.target}
              />
            ))}
          </div>
          <LinkWithArrow
            href={siteConfig.links.findmestore.href}
            content={siteConfig.links.findmestore.label}
            target={siteConfig.links.findmestore.target}
          />
        </div>
      </AnimateItems>
    </>
  );
}

export default HeaderDesktop;