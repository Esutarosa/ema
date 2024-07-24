import type { FC } from 'react';

import Link from 'next/link';

import { headerData as data } from '@/data/content';

import LinkWithArrow from '@/components/LinkWithArrow';
import useIsDesktop from '@/hooks/useIsDesktop';

import { cn } from '@/helpers/cn';
import HeaderMobile from './HeaderMobile';

interface HeaderProps {
  isHideHeader?: boolean;
}

const Header: FC<HeaderProps> = ({
  isHideHeader,
}) => {
  const isDesktop = useIsDesktop();

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 px-3 bg-background',
      isHideHeader && 'hidden'
    )}>
      <div className={cn(
        'w-full flex justify-between md:grid items-center container mx-auto border-b border-muted px-3 py-3',
        'grid-cols-1 md:grid-cols-3',
      )}>
        <div className='md:col-start-1'>
          <Link
            href='/'
            className='hover:text-primary transition-colors'
          >
            EMA
          </Link>
        </div>
        <div className='md:col-start-3 flex md:justify-between space-x-3'>
          {isDesktop ? (
            <>
              <div className='flex gap-3'>
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
            </>
          ) : (
            <HeaderMobile />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;