import type { FC } from 'react';

import { heroImageData, heroSliderConfig } from '@/components/hero/HeroData';

import InfiniteMovingCards from '@/components/InfiniteMovingCards';
import AnimateItems from '@/components/AnimateItems';

import { cn } from '@/helpers/cn';

const HeroSlider: FC = () => {
  return (
    <div className={cn(
      'relative flex flex-col items-center justify-center h-full overflow-hidden',
      '[mask-image:linear-gradient(to_bottom,transparent,white_20%)]'
    )}>
      <AnimateItems
        duration={0.8}
        staggerDelay={0.075}
        distanceOffset={80}
        items={heroSliderConfig.map((config, index) => (
          <InfiniteMovingCards
            key={index}
            pauseOnHover={false}
            direction={config.direction}
            speed={config.speed}
            images={heroImageData.slice(config.startIndex, config.startIndex + config.count)}
            className={cn(
              '-rotate-[12.5deg] overflow-visible shadow-md'
            )}
          />
        ))}
      />
      <AnimateItems className='absolute inset-0 flex items-center justify-center z-20'>
        <h1 className='text-9xl font-bold text-foreground z-50 text-center select-none'>
          エマ
        </h1>
      </AnimateItems>
    </div>
  );
}

export default HeroSlider;