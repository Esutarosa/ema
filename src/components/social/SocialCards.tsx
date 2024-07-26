import type { FC } from 'react';

import Link from 'next/link';

import AnimateItems from '@/components/AnimateItems';
import Panel from '@/components/Panel';

export type SocialItem = {
  label: string;
  href: string;
  target: string;
}

interface SocialCardsProps {
  ema: SocialItem[];
  dustcell: SocialItem[];
}

const SocialCards: FC<SocialCardsProps> = ({ ema, dustcell }) => {
  return (
    <>
      <AnimateItems
        className='flex flex-col items-center justify-center gap-4'
        items={dustcell.map((item, index) => (
          <Link href={item.href} key={index} target={item.target}>
            <Panel hasActiveOnHover className='group/panel w-[220px] sm:w-[320px] lg:w-[520px]'>
              <span>{item.label}</span>
            </Panel>
          </Link>
        ))}
      />
      <div className='text-center text-2xl uppercase font-semibold pt-12 pb-8'>EMA</div>
      <AnimateItems
        className='flex flex-col items-center justify-center gap-4'
        items={ema.map((item, index) => (
          <Link href={item.href} key={index} target={item.target}>
            <Panel hasActiveOnHover className='group/panel w-[220px] sm:w-[320px] lg:w-[520px]'>
              <span>{item.label}</span>
            </Panel>
          </Link>
        ))}
      />
    </>
  );
}

export default SocialCards;