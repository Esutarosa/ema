import type { FC } from 'react';

import { Section } from '@/components/layouts';

import InfiniteMovingCards from '@/components/InfiniteMovingCards';
import LinkWithArrow from '@/components/LinkWithArrow';

import { siteConfig } from '@/config/site';
import { version } from '@/../package.json';

import { cn } from '@/helpers/cn';

interface FooterProps {
  isHideFooter?: boolean;
}

const Footer: FC<FooterProps> = ({ isHideFooter }) => {
  return (
    <footer className={cn(
      'flex flex-col items-center body bg-[#1C1C1C] dot-grid z-[1] w-full text-foreground',
      isHideFooter && 'hidden',
    )}>
      <Section
        relative
        variant='grid'
        className='w-full container pb-10 pt-6 md:pb-10 md:pt-8 gap-y-8'
      >
        <div className='flex-col space-y-2 col-start-1 col-end-13 caption md:col-start-1 md:col-end-6'>
          <span className='flex flex-row space-x-2 align-middle'>
            <p className='self-center w-min px-2 pt-1 pb-[2px] lowercase text-primary border-primary border border-solid rounded-full'>
              v{version}
            </p>
            <p className='self-center px-2 pt-1 pb-[2px] text-sm uppercase text-zinc-600'>
              latest version
            </p>
          </span>
        </div>
        <nav className='flex flex-col space-y-1 col-start-1 col-end-13 md:col-start-7 md:col-end-9'>
          {siteConfig.links.emaLinks.map((link, index) => (
            <p className='flex gap-4'>
              <LinkWithArrow
                key={index}
                href={link.href}
                content={link.label}
                target={link.target}
              />
            </p>
          ))}
        </nav>
        <div className='flex flex-col space-y-1 col-start-1 col-end-13 md:col-start-9'>
          <p className='text-xs text-foreground/70'>All rights reserved</p>
          <span className='flex flex-row'>
            <LinkWithArrow
              href='https://github.com/Esutarosa/EMA'
              content='GitHub'
              target='_blank'
              className='text-xs text-foreground/70'
            />
          </span>
        </div>
      </Section>
      <InfiniteMovingCards />
    </footer>
  );
}

export default Footer;