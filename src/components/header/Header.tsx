'use client';

import type { FC } from 'react';

import Link from 'next/link';

import { siteConfig } from '@/config/site';

import { HeaderMobile, HeaderDesktop } from '@/components/header';

import useIsDesktop from '@/hooks/useIsDesktop';
import useScrollPosition from '@/hooks/useScrollPosition';

import { cn } from '@/helpers/cn';

interface HeaderProps {
  isHideHeader?: boolean;
}

const Header: FC<HeaderProps> = ({
  isHideHeader,
}) => {
  const isDesktop = useIsDesktop(1536);
  const isScrolled = useScrollPosition(20);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50',
      'transition-colors duration-300 font-semibold',
      isScrolled ? 'bg-background' : 'bg-transparent',
      isHideHeader && 'hidden',
    )}>
      <div className={cn(
        'w-full flex justify-between 2xl:grid items-center container mx-auto border-b border-muted px-3 py-3',
        'grid-cols-1 md:grid-cols-3 transition-colors duration-300',
        isScrolled ? 'border-b border-muted' : 'border-b-0',
      )}>
        <div className='md:col-start-1'>
          <Link
            href='/'
            className='hover:text-primary transition-colors'
          >
            EMA
          </Link>
        </div>
        <div className='md:col-start-3 space-x-3'>
          {!isDesktop ? (
            <HeaderMobile data={siteConfig.navItems} />
          ) : (
            <HeaderDesktop data={siteConfig.navItems} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;