import type { FC } from 'react';

import { Container } from '@/components/layouts';

import { HeroAvatars } from '@/components/hero'
import AnimateItems from '@/components/AnimateItems';

import { cn } from '@/helpers/cn';

const HeroContent: FC = () => {
  return (
    <Container className={cn(
      'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      'flex items-center justify-center w-full h-full bg-background/50',
    )}>
      <div className='grid grid-cols-1 lg:grid-cols-3 items-center justify-between w-full'>
        <div className='flex flex-col col-start-1 gap-3 max-w-lg pr-10 lg:pr-0'>
          <AnimateItems>
            <h2 className='text-4xl'>
              <span className='font-bold'>EMA</span>
              <span className='text-foreground/70'> {' '}
                | Vocalist
              </span>
            </h2>
            <p className='text-sm text-foreground/70'>
              Previously a singer, EMA writes and composes some of DUSTCELL&apos;s songs, often drawing from personal experiences. Influences include BTS and BLACKPINK internationally, and Hikaru Utada, amazarashi, and Avicii in Japan.
            </p>
          </AnimateItems>
        </div>
        <div className='col-start-2 lg:col-start-3'>
          <div className='flex items-center justify-between w-full'>
            <AnimateItems className='max-w-[215px] w-full'>
              <HeroAvatars className='hidden lg:block' />
            </AnimateItems>
            <AnimateItems className='text-primary'>
              <h4 className='vertical-japanese-text'>メンバー</h4>
            </AnimateItems>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeroContent;