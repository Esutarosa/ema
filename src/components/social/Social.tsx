import type { FC } from 'react';

import { SocialCards } from '@/components/social';

import AnimateItems from '@/components/AnimateItems';
import Image from 'next/image';

import { siteConfig } from '@/config/site';

interface SocialProps { }

const Social: FC<SocialProps> = ({ }) => {
  const socialItemsEma = siteConfig.links.emaLinks;
  const socialItemsDustcell = siteConfig.links.dustcellLink;

  return (
    <AnimateItems>
      <div className='flex flex-col items-center justify-center gap-4 pb-8'>
        <Image
          src='/favicon.ico'
          width={82}
          height={82}
          alt='Logo'
        />
        <h1 className='text-2xl uppercase font-semibold'>DUSTCELL</h1>
        <p className='text-sm max-w-xs text-center'>
          Started a duo music unit of vocalist EMA and composer Misumi in October 2019.
        </p>
      </div>
      <SocialCards ema={socialItemsEma} dustcell={socialItemsDustcell} />
    </AnimateItems>
  );
}

export default Social;